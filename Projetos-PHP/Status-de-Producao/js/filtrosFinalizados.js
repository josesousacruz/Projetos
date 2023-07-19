$(document).ready(function() {

  // Função de filtragem por intervalo de datas

  // Inicializa o DataTable
  var table = $('#filterTable').DataTable({
      responsive: {
          details: {
              renderer: function(api, rowIdx, columns) {
                  var data = $.map(columns, function(col, i) {
                      return col.hidden ?
                          '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col
                          .columnIndex + '">' +
                          '<td>' + col.title + ':' + '</td> ' +
                          '<td>' + col.data + '</td>' +
                          '</tr>' :
                          '';
                  }).join('');

                  return data ?
                      $('<table/>').append(data) :
                      true;
              }
          }
      },
      pagingType: 'full_numbers',
      dom: 'Bfrtip',
      ordering: true,
      searching: true,
      buttons: [{
          extend: 'pdfHtml5',
          exportOptions: {
              columns: [0, 1, 4, 5, 6, 7, 8, 9, 10, 11]
          },
          customize: function(doc) {
              doc.content[0].text = 'Relatorio de carregamentos';
              doc.styles.tableHeader = {
                  color: '#fafafa',
                  fillColor: 'f0f0f0',
                  alignment: 'center'
              };
          }
      }, 'excel', 'csv', 'print'],
      language: {
          url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
      }
  });

  $(document).ready(function() {
      function formatDate(date) {
          var parts = date.split(' ')[0].split('/');
          return parts[2] + '-' + parts[1] + '-' + parts[0];
      }

      $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {

          var minDate = $('#min-date').val();
          var maxDate = $('#max-date').val();
          var currentDate = formatDate(data[4]);


          if ((minDate === "" || maxDate === "") || (currentDate >= minDate && currentDate <= maxDate)) {
              return true;
          }

          return false;
      });



      $(document).on('change', '#min-date, #max-date, #filterProduto, #filterEspecie', function() {
          var selectedValue = $(this).val();
          var id = $(this).attr('id');

          if (id === "max-date" || id === "filterProduto" || id === "filterEspecie" || id === "min-date") {
              var dataObjects = $("#filterTable").DataTable().rows().data().toArray();
              var dataTermino = [];
              var quantidades = [];
              var dataQuantidades = {};
              table.draw();


              $("#filterTable").DataTable().rows({
                  search: "applied"
              }).nodes().each(function(row, index, dt) {
                  var dataHora = dt.row(row).data()[4]; // Índice 4 contém a data de término e hora
                  var data = dataHora.split(" ")[0]; // Extrai apenas a data
                  var quantidade = parseInt(dt.row(row).data()[9]);

                  if (dataQuantidades[data] === undefined) {
                      dataQuantidades[data] = quantidade;
                  } else {
                      dataQuantidades[data] += quantidade;
                  }
              });


              // Obter as datas únicas em ordem crescente
              var dataTermino = Object.keys(dataQuantidades).sort(function(a, b) {
                  var dateA = new Date(a.split('/').reverse().join('/'));
                  var dateB = new Date(b.split('/').reverse().join('/'));
                  return dateA - dateB;
              });
              // Obter as quantidades correspondentes às datas
              var quantidades = dataTermino.map(function(data) {
                  return dataQuantidades[data];
              });
              graficoBarRelatorios(dataTermino, quantidades)
              console.log(dataTermino)
              var qtd = 0
              quantidades.forEach(quantidade => {
                  qtd += quantidade
              });
              graficoPieRelatorio(qtd)

          } else if (id === "filterProduto") {
              table.column(7).search(selectedValue).draw();
          } else if (id === "filterEspecie") {
              table.column(8).search(selectedValue).draw();
          }
      });


  });




  $('#filterProduto').on('change', function() {
      var selectedValue = $(this).val();
      table.column(7).search(selectedValue).draw();
  });


  $('#filterEspecie').on('change', function() {
      var selectedValue = $(this).val();
      table.column(8).search(selectedValue).draw();
  });




});



let myBarChartRelatorios;
function graficoBarRelatorios(datachegada, quantidade) {
  const data = {
      labels: datachegada,
      datasets: [
          //   {
          //     label: "Meta diaria",
          //     backgroundColor: "rgb(166, 249, 247)",
          //     borderColor: "rgb(255, 99, 132)",
          //     data: retornaMetaDia(datachegada),
          //   },
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
                  display: function(context) {
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

  if (myBarChartRelatorios) {
      myBarChartRelatorios.destroy();
  }
  myBarChartRelatorios = new Chart(document.getElementById("myBarChartRelatorios"), config);
}

let myPieChartRelatorio

function graficoPieRelatorio(totalProduzido) {
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
      labels: [
          "Executado",
          "Total Meta",
          
          // "Saldo Pendente"
      ],
      datasets: [{
          label: "Quantidade em ton",
          data: [
              totalProduzido,
              totalMetaMes,
              // saldoPendente
          ],
          backgroundColor: [
              "rgb(166, 249, 247)",
              "rgb(47,79,79)",
              "rgb(255,228,181)",
              "rgb(0, 240, 220)", 
              "rgb(270,255,90)",
          ],
          //   hoverOffset: 4
      }, ],
  };

  const config = {
      type: "pie",
      data: data,
      options: {
          plugins: {
              datalabels: {
                  color: "White",
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

  if (myPieChartRelatorio) {
      myPieChartRelatorio.destroy();
  }
  myPieChartRelatorio = new Chart(document.getElementById("myPieChartRelatorio"), config);
}