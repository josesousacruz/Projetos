import { btnControleAcesso, msgPrincipal, msgSecundaria } from "../../elementos/index.js";
import { datatableCA, tableControleAcesso } from './dataTable.js'
import { registroAcesso } from "../../elementos/index.js";
import { setInfosVeiculosAcesso } from "./triagem.js";
import { info } from "laravel-mix/src/Log.js";


export const fetchPrograns = (placaAcesso, cnhAcesso, cpfAcesso, id_unidade) => {
  cpfAcesso = cpfAcesso.replace(/[.-]/g, '');

  $.post('/acesso/triagem', {
    _token: $('meta[name="csrf-token"]').attr('content'),
    placa: placaAcesso,
    cpf: cpfAcesso,
    cnh: cnhAcesso,
    id_unidade: id_unidade
  }, function (data) {
    alteraMensagens(data);
    if (data.programacao) {
      if (data.programacao.length > 0) {
        fetchUltimaMov(data.programacao[0].id_veiculo_cavalo)
          .then(existeMovSemSaida => {
            if (existeMovSemSaida) {
              setInfosVeiculosAcesso(data.programacao)
              modalConfirInfo(data.programacao[0])
            }
            datatableCA(data);
          })
          .catch(error => {
            console.error('Erro na requisição GET:', error);
          });
      } else {
        if ($.fn.DataTable.isDataTable("#programTable")) {
          tableControleAcesso.clear().draw();
          tableControleAcesso.destroy();
        }
      }
    } else {
      if ($.fn.DataTable.isDataTable("#programTable")) {
        tableControleAcesso.clear().draw();
        tableControleAcesso.destroy();
      }
    }


  }, 'json')
    .fail(function (xhr, status, error) {
      console.error('Erro na requisição POST:', error);
    });
}


const alteraMensagens = (data) => {
  // Atualiza as mensagens principais e secundárias com base no status HTTP
  if ([200, 204, 400, 404].includes(data.http_retorno)) {
    msgPrincipal.html((data.http_retorno === 400 || data.http_retorno === 404) ? data.error : data.message);
    msgSecundaria.html(data.messageSecond);
  }

  // Configura o botão e o ícone com base no status HTTP
  if ([200, 204, 400, 404].includes(data.http_retorno)) {
    const isSuccess = data.http_retorno === 200;
    btnControleAcesso.removeClass(isSuccess ? "btn-danger" : "btn-success")
      .addClass(isSuccess ? "btn-success" : "btn-danger");
    btnControleAcesso.find("i").removeClass(isSuccess ? "bi-lock-fill" : "bi-unlock-fill")
      .addClass(isSuccess ? "bi-unlock-fill" : "bi-lock-fill");
  }
}


export const modalConfirInfo = async (infos) => {
  var baseUrl = window.location.protocol + "//" + window.location.host + "/";
  var novoSrc = `${baseUrl}${infos.entidade_motorista.imagem}.jpeg`;
  console.log(infos);
  $('#nameMotorista').html(infos.entidade_motorista.nome);
  $('#objNoTerminal').html(infos.operacoes.observacao);
  $('#transpInfo').html(infos.entidade_transportador.razao_social);
  $('#tipoInfos').html(infos.veiculo.tipo_veiculo.descricao);
  $('#placaInfos').html(infos.veiculo.placa);
  $('#documInfos').html(infos.documentacao_okay ? 'Documentação completa' : 'Documentação pendente');
  $('#cpfTriagem').html(infos.entidade_motorista.cpf);
  $('#cnhTriagem').html(infos.entidade_motorista.cnh);
  $('#img_motorista_triagem').attr('src', novoSrc);


  let existeMovSemSaida = await fetchUltimaMov(infos.id_veiculo_cavalo)

  existeMovSemSaida ? $("#registerAcesso").html('Registrar Saida') : $("#registerAcesso").html('Registrar Entrada')


  registroAcesso.show()
}


const fetchUltimaMov = (data) => {
  return new Promise((resolve, reject) => {
    $.get(`/movimentacao/verificar/${data}`, function (data) {
      resolve(data);
    })
      .fail(function (xhr, status, error) {
        reject(error);
        console.error('Erro na requisição GET:', error);
      });
  })
}


export const registerMov = async (data) => {
  let direcao = await fetchUltimaMov(data.id_veiculo_cavalo)

  direcao ? "S" : "E"

  $.post('/acesso/movimentacao', {
    _token: $('meta[name="csrf-token"]').attr('content'),
    id_veiculo: data.id_veiculo_cavalo,
    id_entidade: data.id_entidade_motorista,
    id_unidade: 259,
    direcao: direcao
  }, function (data) {
    reset()
  }, 'json')
    .fail(function (xhr, status, error) {
      console.error(error);
    });
}

function reset() {
  registroAcesso.hide()
  msgPrincipal.html('Realize uma consulta para verificar as programações disponiveis.');
  msgSecundaria.html("Informe a PLACA, CNH ou CPF do motorista para verificar se existe programação disponivel.");
  btnControleAcesso.removeClass("btn-success")
    .addClass("btn-danger");
  btnControleAcesso.find("i").removeClass("bi-unlock-fill")
    .addClass("bi-lock-fill");
  if ($.fn.DataTable.isDataTable("#programTable")) {
    tableControleAcesso.clear().draw();
    tableControleAcesso.destroy();
  }

}