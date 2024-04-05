import { datatableVNT, datatableAcessos } from "./dataTable.js";
import { tableAcessos } from "./dataTable.js";

export const getVeiculoNoTerminal = (id_unidade) => {
    $.post('/relatorio/veiculosNoTerminal', {
        _token: $('meta[name="csrf-token"]').attr('content'),
        id_unidade: id_unidade
    }, function (data) {
        datatableVNT(data)
        data.forEach(element => {
            var svgHTML = `
            <div class="m-1" style="width: 140px; height: 43.875px;">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="135px"
                    height="43.875px"
                    style="border: 1px solid black;border-radius: 5px; box-shadow: 0px 0px 3px black;">
                    <rect width="100%" height="20%" style="fill:blue;"></rect>
                    <text x="50%" y="16%" text-anchor="middle"
                        style="font-family:'Arial'; font-size:7.5px; fill:white;">BRASIL</text>
                    <image x="1%" y="1%" width="18%" height="18%"
                        xlink:href="https://logodownload.org/wp-content/uploads/2019/01/mercosul-logo-3.png"></image>
                    <!-- LOGO MERCOSUL -->
                    <image x="81%" y="1%" width="18%" height="18%"
                        xlink:href="https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image">
                    </image> <!-- QRCode -->
                    <rect y="20%" width="100%" height="80%" style="fill:white;"></rect>
                    <text x="5%" y="90%" text-anchor="middle"
                        style="font-family:'Arial'; font-size:7px; fill:black;">BR</text>
                    <image x="2%" y="25%" width="8%" height="20.5%"
                        xlink:href="https://www.gov.br/inss/pt-br/centrais-de-conteudo/imagens/qr-code-novo-fw-300x300-png">
                    </image>
                    <text id="placaSVG" x="50%" y="80%" text-anchor="middle"
                        style="font-family:'FE Engschrift'; font-size:25px; fill:black;">${element.veiculos.placa}</text> <!-- PLACA -->
                </svg>
            </div>
            `;
            $('#boardPlaca').append(svgHTML);
        });

        $('#qtdVeiculosNoTerminal').html(data.length)

    }, 'json').fail(function (xhr, status, error) {
        console.error('Erro na requisição POST:', error);
    })
}

export const fetchRelatorioAcessos = (dataInicioRel, dataFimRel, placaRel, motoristaRel, cnhRel, cpfRel) => {
    cpfRel = cpfRel.replace(/[.-]/g, '');
    $.post('/relatorio/acessoVeiculos', {
        _token: $('meta[name="csrf-token"]').attr('content'),
        data_inicial: dataInicioRel,
        data_final: dataFimRel,
        motorista: motoristaRel,
        placa: placaRel,
        cpf: cpfRel,
        cnh: cnhRel
    }, function (data) {
        datatableAcessos(data)
        if (data.mensagem) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: data.mensagem
            });
        }


    }, 'json')
        .fail(function (xhr, status, error) {
            if ($.fn.DataTable.isDataTable("#acessoslTable")) {
                tableAcessos.clear().draw();
                tableAcessos.destroy();
            }
            console.error('Erro na requisição POST:', error);
        });

}






