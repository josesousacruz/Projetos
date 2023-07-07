$(document).ready(function () {
  // Inicializa o DataTable
  var table = $("#dailyTable").DataTable({
    ajax: {
      url: "graficos/ocorrencias.php",
      type: "GET",
      dataType: "json",
      dataSrc: "data",
    },
    columns: [
      { data: "id", title: "ID" },
      { data: "data_inicio", title: "Início" },
      { data: "data_fim", title: "Término" },
      // {data: 'tempo', title: 'Tempo'},
      { data: "ocorrencia", title: "Ocorrência" },
      { data: "observacao", title: "Obs." },
      {
        data: "id",
        title: "Ação",
        className: "text-center",
        render: function (data, type, row) {
          return (
            '<button class="fa-solid fa-pen-to-square edit-button btn-outline-warning" data-id="' +
            data +
            '"></button>'
          );
        },
      },
    ],

    responsive: true,
    paging: false,
    lengthChange: false,
    ordering: false,
    searching: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
    },
  });

  var reltable = $("#reldailyTable").DataTable({
    ajax: {
      url: "graficos/ocorrenciasRel.php",
      type: "GET",
      dataType: "json",
      dataSrc: "data",
    },
    columns: [
      { data: "manutPreventiva", title: "Manutenção preventiva" },
      { data: "manutCorretiva", title: "Manutenção corretiva" },
      { data: "limpRotina", title: "Limpeza de rotina" },
      { data: "limpProduto", title: "Limpeza troca de produto" },
      { data: "faltVeiculos", title: "Falta de veiculos" },
      { data: "faltProgramacao", title: "Falta de programação" },
      { data: "aguardOP", title: "Aguardando OP" },
      { data: "ajustPeso", title: "Ajuste de peso" },
      { data: "dds", title: "DDS" },
      { data: "trocTurno", title: "Troca de turno" },
      { data: "abastSilo", title: "Abastecimento" },
      { data: "intervalo", title: "Intervalo" },
      { data: "total", title: "Total" },
    ],
    responsive: true,
    paging: false,
    lengthChange: false,
    ordering: false,
    searching: false,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
    },
  });

  $("#dailyTable tbody").on("click", ".edit-button", function () {
    var id = $(this).data("id");
    preencherCamposModal(id);
  });

  function preencherCamposModal(id) {
    // Realizar a requisição AJAX para obter os dados do servidor
    $.ajax({
      url: "graficos/ocorrencias.method.php",
      type: "GET",
      data: { id: id },
      dataType: "json",
      success: function (response) {
        // Verificar se os dados foram retornados com sucesso
        if (response.data.length > 0) {
          var ocorrencia = response.data[0]; // Primeiro objeto do array

          // Preencher os campos do modal com os valores obtidos do banco de dados
          $("#ocorrenciaEdit").val(ocorrencia.ocorrencia);
          $("#date_inicioEdit").val(ocorrencia.data_inicio);
          $("#date_terminoEdit").val(ocorrencia.data_fim);
          $("#message-textEdit").val(ocorrencia.observacao);
          $("#edit_id").val(ocorrencia.id);
          $("#ocorrenciasModalEdit").modal("show");
        } else {
          // Exibir uma mensagem de erro caso os dados não sejam encontrados
          alert("Não foi possível obter os dados da ocorrência");
        }
      },
      error: function () {
        // Exibir uma mensagem de erro caso ocorra um erro na requisição AJAX
        alert("Ocorreu um erro na requisição AJAX");
      },
    });
  }

  // Captura o evento de envio do formulário ou o evento de clique do botão
  $("#formOcorrencia").submit(function (event) {
    event.preventDefault();

    // Obtém os dados do formulário
    var formData = $(this).serialize();

    $.ajax({
      url: "graficos/ocorrencias.method.php",
      type: "POST",
      data: formData,
      success: function (response) {
        $("#formOcorrencia")[0].reset();

        table.ajax.reload();
        reltable.ajax.reload();
        $("#ocorrenciasModal").modal("hide");
      },
      error: function () {
        alert("Error no POST");
      },
    });
  });

  $("#ocorrenciasModalbtn").on("click", function () {
    $("#ocorrenciasModal").modal("show");
  });

  $("#formOcorrenciaEdit").submit(function (event) {
    event.preventDefault();

    // Obtém os dados do formulário
    var formData = $(this).serialize();

    $.ajax({
      url: "graficos/ocorrencias.method.php",
      type: "POST",
      data: formData,
      success: function (response) {
        $("#formOcorrencia")[0].reset();

        table.ajax.reload();
        $("#ocorrenciasModalEdit").modal("hide");
      },
      error: function () {
        console.log("Error no POST");
      },
    });
  });

  // Função para processar a requisição AJAX
  function enviarRequisicao() {
    var minDate = $("#min-date").val();
    var maxDate = $("#max-date").val();

    $.ajax({
      url: "graficos/ocorrencias.php",
      type: "POST",
      data: {
        "min-date": minDate,
        "max-date": maxDate,
      },
      dataType: "json",
      success: function (response) {
        // Processar a resposta do servidor aqui
        table.clear().rows.add(response.data).draw(); // Limpar a tabela e adicionar os novos dados
      },
      error: function () {
        // Tratar erros de requisição AJAX aqui
        console.log("Error no POST");
      },
    });

    $.ajax({
      url: "graficos/ocorrenciasRel.php",
      type: "POST",
      data: {
        relatorio: "true",
        "min-date": minDate,
        "max-date": maxDate,
      },
      dataType: "json",
      success: function (response) {
        // Processar a resposta do servidor aqui
        reltable.clear().rows.add(response.data).draw();
      },
      error: function () {
        // Tratar erros de requisição AJAX aqui
        console.log("Error no POST");
      },
    });
  }

  // Capturar o evento de envio do formulário
  $("#dateForm").submit(function (event) {
    event.preventDefault();
    enviarRequisicao();
  });
});

function gerarExcel() {
  var dataObjects = $("#dailyTable")
    .DataTable()
    .rows({
      search: "applied",
    })
    .data()
    .toArray();

  var worksheet = XLSX.utils.json_to_sheet(dataObjects);
  var workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Dados");

  var excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  var blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, "dados.xlsx");
}

async function gerarPDF() {
  var doc = new jsPDF("p", "pt");
  let imageUrl1 =
    "https://gs.intermaritima.com.br/gs/giusoft/img_2.0/logo_pdf.jpg";
  let imageUrl2 = "https://gs.intermaritima.com.br/gs/giusoft/img_2.0/bvqi.jpg";

  // Para adicionar imagens, você precisa do URL ou do dataURL da imagem
  // Assim como a posição (x, y), e o tamanho (largura, altura)

  imageUrl1 = await convertImageToBase64(imageUrl1);
  imageUrl2 = await convertImageToBase64(imageUrl2);
  doc.addImage(imageUrl1, "JPEG", 50, 15, 145, 45);
  doc.addImage(imageUrl2, "JPEG", 375, 15, 175, 45);
  doc.setFontSize(20);
  doc.text("Relatório de Ocorrencias", 200, 85);

  var dataObjects = $("#dailyTable").DataTable().rows().data().toArray();
  var dataObjectsRel = $("#reldailyTable").DataTable().rows().data().toArray();

  console.log(dataObjectsRel);
///////////////////////////Tabela principal///////////////////////////
  var columns = [
    { title: "Inicio", dataKey: "data_inicio" },
    { title: "Termino", dataKey: "data_fim" },
    { title: "Ocorrencia", dataKey: "ocorrencia" },
  ];

  doc.autoTable(columns, dataObjects, {
    theme: "grid",
    startY: 120,
    showHeader: "firstPage",
    tableLine: 20,
    styles: { fontSize: 8, fontStyle: "bold", fontColor: [0, 0, 0] },
    columnStyles: {},
    headerStyles: {},
  });


///////////////////////////////////Relatorio 1////////////////////////////////////////
  var columnsRel = [
    { title: "Abastecimento Silo", dataKey: "abastSilo" },
    { title: "Aguardando OP", dataKey: "aguardOP" },
    { title: "Ajuste de Peso", dataKey: "ajustPeso"},
    { title: "DDS", dataKey: "dds"},
    { title: "Falta de Programação", dataKey: "faltProgramacao" },
  ];

  doc.autoTable(columnsRel, dataObjectsRel, {
    theme: "grid",
    startY: doc.autoTable.previous.finalY + 20, // Posiciona a nova tabela abaixo da tabela anterior
    showHeader: "firstPage",
    tableLine: 20,
    styles: { fontSize: 8, fontStyle: "bold", fontColor: [0, 0, 0] },
    columnStyles: {},
    headerStyles: {},
  });
/////////////////////////////////Relatorio 2////////////////////////////////////////////
var columnsRel = [
    { title: "Falta de veiculos", dataKey: "faltVeiculos" },
    { title: "Intervalo", dataKey: "intervalo"},
    { title: "Troca de produto", dataKey: "limpProduto"},
    { title: "Falta de Programação", dataKey: "faltProgramacao" },
    { title: "Falta de veiculos", dataKey: "faltVeiculos" },
  ];

  doc.autoTable(columnsRel, dataObjectsRel, {
    theme: "grid",
    startY: doc.autoTable.previous.finalY + 5, // Posiciona a nova tabela abaixo da tabela anterior
    showHeader: "firstPage",
    tableLine: 20,
    styles: { fontSize: 8, fontStyle: "bold", fontColor: [0, 0, 0] },
    columnStyles: {},
    headerStyles: {},
  });
  
  /////////////////////////////////Relatorio 3////////////////////////////////////////////
var columnsRel = [
    { title: "Intervalo", dataKey: "intervalo"},
    { title: "Troca de produto", dataKey: "limpProduto"},
    { title: "Limpeza de Rotina", dataKey: "limpRotina"},
    { title: "Manutenção corretiva", dataKey: "manutCorretiva"},
    { title: "Manutenção precentiva", dataKey: "manutPreventiva"},
  ];

  doc.autoTable(columnsRel, dataObjectsRel, {
    theme: "grid",
    startY: doc.autoTable.previous.finalY + 5, // Posiciona a nova tabela abaixo da tabela anterior
    showHeader: "firstPage",
    tableLine: 20,
    styles: { fontSize: 8, fontStyle: "bold", fontColor: [0, 0, 0] },
    columnStyles: {},
    headerStyles: {},
  });

  doc.save("ocorrencias.pdf");
}

$("#gerarExcelBtn").on("click", function () {
  gerarExcel();
});

$("#btnGerarPDF").click(function () {
  gerarPDF();
});

function convertImageToBase64(url) {
  return new Promise((resolve, reject) => {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/jpeg"); // ou 'image/jpeg' se for uma imagem JPEG
      resolve(dataURL);
    };
    img.onerror = reject;
    img.src = url;
  });
}
