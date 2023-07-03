let datas = new Date();

let mes = String(datas.getMonth() + 1);

let dia = String(datas.getDate());

var primeiroDiaMeS = new Date(datas.getFullYear(), datas.getMonth(), 1);
var ultimoDiaMes = new Date(datas.getFullYear(), datas.getMonth() + 1, 0);

let qtdiaMes = () => {
  switch (mes) {
    case `1`:
      return 31;
    case `2`:
      return 28;
    case `3`:
      return 31;
    case `4`:
      return 30;
    case `5`:
      return 31;
    case `6`:
      return 30;
    case `7`:
      return 31;
    case `8`:
      return 31;
    case `9`:
      return 30;
    case `10`:
      return 31;
    case `11`:
      return 30;
    case `12`:
      return 31;
  }
};

programadoMes = 0;

$("document").ready(function () {
  $.post("graficos/valorMetaMensal.php", function (result) {
    var data = JSON.parse(result);

    programadoMes = data[0].valorDaMeta;
  });
});

function getQuantidadeSegundasFeiras() {
  const date = new Date();
  const mes = date.getMonth();
  let quantidade = 0;

  for (let dia = 1; new Date(date.getFullYear(), mes, dia).getMonth() === mes; dia++) {
    if (new Date(date.getFullYear(), mes, dia).getDay() === 1) {
      quantidade++;
    }
  }

  return quantidade;
}

function retornaMetaDia(datachegada) {
  let = programadoDia = [];

  // for (let i = 1; i <= qtdiaMes(); i++) {
  //   programadoDia.push(Math.round(programadoMes / qtdiaMes()));
  // }

  let qtdSobra = ((programadoMes / qtdiaMes()) * 0.25) * getQuantidadeSegundasFeiras() / qtdiaMes();

  var metaSegunda = Math.round(programadoMes / qtdiaMes() * 0.75); // Meta reduzida para segunda-feira
  var metaOutros = Math.round(programadoMes / (qtdiaMes()) + qtdSobra ); // Meta para os demais dias
  
  for (let i = 0; i <= datachegada.length; i++) {
    if (datachegada[i]) {
      var dataFormatada = datachegada[i].split("/").reverse().join("-");
      var date = new Date(dataFormatada);
      var diaSemana = date.getDay();
      
      var metaDiaria = (diaSemana === 0) ? metaSegunda : metaOutros;
      programadoDia.push(metaDiaria);
  
      console.log(date);
      console.log(dataFormatada);
      console.log(diaSemana)
    }
  }
  
  
  return programadoDia;
}

////////////////////////////////////Tabela infos//////////////////////////////////////////////

$("document").ready(function () {
  var data_inicio = primeiroDiaMeS
    .toLocaleDateString("pt-BR")
    .split("/")
    .reverse()
    .join("-");
  var data_final = ultimoDiaMes
    .toLocaleDateString("pt-BR")
    .split("/")
    .reverse()
    .join("-");

  $.post(
    "graficos/graficoTabela.php",
    { data_inicio: data_inicio, data_final: data_final },
    function (result) {
      var data = JSON.parse(result);

      var carregadoEmBigbag = [];
      var carregadoEmGranel = [];
      var totalVeiculosCarregados = [];

      for (let i in data) {
        carregadoEmBigbag.push(data[i].carregadoEmBigbag);
        carregadoEmGranel.push(data[i].carregadoEmGranel);
        totalVeiculosCarregados.push(data[i].totalVeiculosCarregados);
      }

      setTimeout(() => {
        tabelaInfo(
          carregadoEmBigbag,
          carregadoEmGranel,
          totalVeiculosCarregados,
          programadoMes
        );
      });
    }
  );

  /////////////////////////////////////////////////////////////////////////////

  $.post(
    "graficos/metaProgramadaNaoExecut.php",
    { data_inicio: data_inicio, data_final: data_final },
    function (result) {
      var data = JSON.parse(result);

      var metaProgramadaNaoExecutada = [];

      for (let i in data) 
      {
        metaProgramadaNaoExecutada.push(data[i].metaProgramadaNaoExecutada);
      }

      tabelaInfoMetaNaoExecut(metaProgramadaNaoExecutada);
    }
  );

  ///
});

function tabelaInfoMetaNaoExecut(metaProgramadaNaoExecutada) {
  var metaProgramadaNaoExecutadaa = document.createTextNode(
    metaProgramadaNaoExecutada
  );
  document
    .getElementById("metaProgramadaNaoExecutada")
    .appendChild(metaProgramadaNaoExecutadaa);
}

function tabelaInfo(
  carregadoEmBigbag,
  carregadoEmGranel,
  totalVeiculosCarregados,
  programadoMes
) {
  var carregadoEmBigbag = document.createTextNode(carregadoEmBigbag);
  document.getElementById("carregadoEmBigbag").appendChild(carregadoEmBigbag);

  var carregadoEmGranel = document.createTextNode(carregadoEmGranel);
  document.getElementById("carregadoEmGranel").appendChild(carregadoEmGranel);

  var totalVeiculosCarregados = document.createTextNode(
    totalVeiculosCarregados
  );
  document
    .getElementById("totalVeiculosCarregados")
    .appendChild(totalVeiculosCarregados);

  var labelMeta = document.createTextNode(programadoMes);
  document.getElementById("totalMeta").appendChild(labelMeta);

  var Metadia = programadoMes / qtdiaMes();
  var labelMeta = document.createTextNode(Math.round(Metadia));
  document.getElementById("MetaDiaria").appendChild(labelMeta);
}

////////////////////////////////////////////// GRAFICO BARRA/////////////////////////////////////////////////////////////////

$("document").ready(function () {
  var data_inicio = primeiroDiaMeS
    .toLocaleDateString("pt-BR")
    .split("/")
    .reverse()
    .join("-");
  var data_final = ultimoDiaMes
    .toLocaleDateString("pt-BR")
    .split("/")
    .reverse()
    .join("-");

  $.post(
    "graficos/graficoBar.php",
    { data_inicio: data_inicio, data_final: data_final },
    function (result) {
      var data = JSON.parse(result);

      var quantidadeArray = [];
      var dataArray = [];

      for (let i in data) {
        quantidadeArray.push(data[i].produzidoDia);
        dataArray.push(data[i].data_fim.split("-").reverse().join("/"));
      }

      setTimeout(() => {
        graficoBar(dataArray, quantidadeArray);
      }, "500");
    }
  );
});

function graficoBar(datachegada, quantidade) {
  const data = {
    labels: datachegada,
    datasets: [
      {
        label: "Meta diaria",
        backgroundColor: "rgb(166, 249, 247)",
        borderColor: "rgb(255, 99, 132)",
        data: retornaMetaDia(datachegada),
      },
      {
        label: "Executado",
        backgroundColor: "rgb(47,79,79)",
        borderColor: "rgb(255, 99, 132)",
        data: quantidade,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true, // Inicia o eixo y em zero
          max: 800, // Define o valor máximo do eixo y
          stepSize: 20, // Define o intervalo entre os valores do eixo y
        },
      },
      plugins: {
        datalabels: {
          display: function (context) {
            // Verifica o índice do dataset para identificar a barra atual
            var dataIndex = context.dataIndex;
            var datasetIndex = context.datasetIndex;
            // Verifique se a barra atual é a barra "executado"
            if (datasetIndex === 0) {
              return "auto"; // Exibe o rótulo na barra "executado"
            } else {
              return dataIndex === 0 ? "auto" : "none"; // Exibe o rótulo apenas na primeira barra "programado"
            }
          },
          layout: {
            padding: {
              left: 50, // Espaçamento à esquerda
              right: 50, // Espaçamento à direita
            },
          },
          color: "green",
          anchor: "end",
          align: "top",
          offset: 2,
          font: {
            size: 13,
            weight: "arial",
          },
        },
      },
    },
  };

  Chart.register(ChartDataLabels); // importante
  const myChart = new Chart(document.getElementById("myBarChart"), config);
}

//////////////////////////////////Grafico Pizza////////////////////////////////////////////////////

$("document").ready(function () {
  var data_inicio = primeiroDiaMeS
    .toLocaleDateString("pt-BR")
    .split("/")
    .reverse()
    .join("-");
  var data_final = ultimoDiaMes
    .toLocaleDateString("pt-BR")
    .split("/")
    .reverse()
    .join("-");

  $.post(
    "graficos/graficoPie.php",
    { data_inicio: data_inicio, data_final: data_final },
    function (result) {
      var data = JSON.parse(result);

      var quantidadeProdMes = [];

      for (let i in data) {
        quantidadeProdMes.push(data[i].produzidoTotal);
      }

      setTimeout(() => {
        graficoPie(quantidadeProdMes);
      }, "500");
    }
  );
});

function graficoPie(totalProduzido) {
  const totalMetaMes = programadoMes;

  const saldoPendente = totalMetaMes - totalProduzido;

  ///////////////////////////Parte do grafico em tabela///////////////////////////////
  var labelPendente = document.createTextNode(saldoPendente);
  document.getElementById("saldoPendente").appendChild(labelPendente);

  necessidadeVeicuPdiaPobjetivo = document.createTextNode(
    Math.round(saldoPendente / 50 / (qtdiaMes() - dia))
  );
  document
    .getElementById("necessidadeVeicuPdiaPobjetivo")
    .appendChild(necessidadeVeicuPdiaPobjetivo);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const data = {
    labels: ["Total Meta", "Executado", "Saldo Pendente"],
    datasets: [
      {
        label: "Quantidade em ton",
        data: [totalMetaMes, totalProduzido, saldoPendente],
        backgroundColor: [
          "rgb(166, 249, 247)",
          "rgb(47,79,79)",
          "rgb(255,228,181)",
        ],
        //   hoverOffset: 4
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      plugins: {
        datalabels: {
          color: "black",
          anchor: "center",
          font: {
            size: 15,
            weight: "bold",
          },
        },
      },
    },
  };

  Chart.register(ChartDataLabels);
  const myChart = new Chart(document.getElementById("myPieChart"), config);
}
