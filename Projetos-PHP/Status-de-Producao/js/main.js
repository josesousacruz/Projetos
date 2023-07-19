//Função do sortable -> adiciona o evendo de arrastar
$(function () {
  $(".sortable").sortable({
    connectWith: ".sortable",
    placeholder: "bg-light.bg-gradient",
    scroll: true,
    animation: 150,
    revert: true,
    ghostClass: "blue-background-class",
    cursor: "move",
    update: function (event, ui) {
      var cad_id_item_list = $(this).sortable("toArray").toString(); // Pega o array na ordem q foi definica com o evento
      var draggedItemId = ui.item.attr("id"); // Pega o elemento q foi arrastado
      $.ajax({
        success: function (data) {
          $.ajax({
            url: "ordenar.php",
            type: "POST",
            data: { id: cad_id_item_list,
              idCarregamento: draggedItemId }
          })
        },
      });
    },
    start: function (event, ui) {
      $(ui.item).find("td").addClass("invisible");
      
    },
    stop: function (event, ui) {
      $(ui.item).find("td").removeClass("invisible");
      
    },
  });
});


//Fução do dataTable pagina Arquivos
$(document).ready(function () {
 table = $("#dataTable").DataTable({
    responsive: {
      details: {
        renderer: function(api, rowIdx, columns){
          var data = $.map(columns, function(col, i) {
            return col.hidden ?
              '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
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
    ordering: false,
    searching: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
    },  
    initComplete: function () {
      var columnIndexToMove = 6; 
      var columnIndexToInsertBefore = 2;
      
      new $.fn.dataTable.ColReorder(table);
      table.colReorder.move(columnIndexToMove, columnIndexToInsertBefore, 'intermediate');
    }
  });




// Oculta o carregamento da dela qd a pagina é carregada
if (window.location.pathname === '/') {
  hideLoader();
} else if (
  window.location.href.includes('gerenciador.php') ||
  window.location.href.includes('perfil.php') ||
  window.location.href.includes('edit.php') ||
  window.location.href.includes('index.php')
) {
  hideLoader();
}



// função para o campo de pesquisa da tabela Index
  $('#searchInput').on('keyup', function () {
    var searchText = $(this).val().toLowerCase();
    $('table tbody tr').each(function () {
      var currentRow = $(this);
      if (searchText.trim() === '') {
        currentRow.show();
      } else {
        var found = false;
        currentRow.find('td').each(function () {
          if ($(this).text().toLowerCase().indexOf(searchText) > -1) {
            found = true;
            return false; // Saia do loop interno se encontrar uma correspondência
          }
        });
        if (found) {
          currentRow.show();
        } else {
          currentRow.hide();
        }
      }
    });
  });



});

$("#dataTable").on('init.dt', function() { 
  hideLoader(); // Ocultar o indicador de carregamento
});

$("#dailyTable").on('init.dt', function() { 
  hideLoader(); // Ocultar o indicador de carregamento
});

$("#filterTable").on('init.dt', function() {
  hideLoader(); // Ocultar o indicador de carregamento
});

function hideLoader() {
  $('#loader').hide(); // Ocultar a div de indicador de carregamento
}

//Function do modal Meta
function openModalAttMeta() {
  $("#modalChart").modal("show");
}
function closeModalAttMeta() {
  $("#modalChart").modal("hide");
}


// Habilitar o input apenas se o campo estiver valor
function updateButtonState(inputId, buttonId) {
  var input = document.getElementById(inputId);
  var button = document.getElementById(buttonId);

  if (input) {
    if (input.value === "") {
      button.disabled = true;
    } else {
      button.disabled = false;
    }

    input.addEventListener("input", function() {
      button.disabled = input.value === "";
    });
  }
}

updateButtonState("inputPDFretorno", "arquivo_pdf_retorno");
updateButtonState("inputPDFticket", "arquivo_pdf_ticket");
updateButtonState("inputPDFvenda", "arquivo_pdf_venda");



// Habilita o dataTable se a tela for mobile
var screenWidth = window.innerWidth;
if (screenWidth <= 768) {
  var element = document.getElementById("tabelaIndex");
  if (element) {
    element.id = "dataTable";
  }

  filtro = document.getElementById('searchDiv');
  filtro.style.display = 'none'

  canvasBarChart = document.getElementById('myBarChart');
  // canvasBarChart.style.position = "center"
  canvasBarChart.style.height = "100%"
  canvasBarChart.style.width = "100%"

}


//Habilida as opções de status de carregamento de acordo com o status atual 
var select = document.getElementById('edit_status_carregamento');
if(select){
  var valorSelecionado = select.value;

  var opcoesExibir = {
    'Programado': [1, 7],
    'Aguardando OP': [2, 3, 7],
    'Patio': [3, 7],
    'Em carregamento': [4],
    'Carregado': [5, 6, 7,8],
    'Ajuste de peso': [6,8],
    'Aguardando NF':[6]
  };
  
  for (var i = 0; i < select.options.length; i++) {
    select.options[i].style.display = opcoesExibir[valorSelecionado]?.includes(i) ? "block" : "none";
  }
  

  

select.addEventListener('change', function(event) {
  var novoValorSelecionado = event.target.value;
// Adicionar evento change para atualizar required com base no novo valor selecionado
  toggleRequiredElements(novoValorSelecionado);
// Aciona o modal de ajuste de peso quando o status corresponde
  if(event.target.value == 'Ajuste de peso'){
    $('#modalExemplo').modal('show');  
  }
});
  
}
if(window.location.href.includes('edit.php')){
  if(select.value == 'Ajuste de peso'){
    $('#modalExemplo').modal('show');
  }
}



// adiciona o atributo required de acordo com o status
var elementos = {
  'Aguardando OP':['edit_data_chegada','inputPDFretorno'],
  'Patio': ['edit_data_chegada','inputPDFretorno', 'edit_ordem'],
  'Em carregamento': ['edit_data_chegada','inputPDFretorno', 'edit_ordem', 'edit_data_inicio'],
  'Carregado': ['edit_data_chegada','inputPDFretorno', 'edit_ordem', 'edit_data_inicio', 'inputPDFticket', 'inputPDFvenda', 'edit_data_fim'],
  'Ajuste de peso': ['edit_data_chegada','inputPDFretorno', 'edit_ordem', 'edit_data_inicio', 'inputPDFticket', 'inputPDFvenda', 'edit_data_fim'],
  'Cancelado': ['edit_data_chegada','inputPDFretorno', 'edit_ordem', 'edit_data_inicio', 'inputPDFticket', 'inputPDFvenda', 'edit_data_fim']
};

function toggleRequiredElements(status) {
  var elements = elementos[status];
  if (elements) {
    elements.forEach(function (elementId) {
      var element = document.getElementById(elementId);
      if (element) {
        element.setAttribute('required', 'required');
      }
    });
  }
}

// Adicionar required inicialmente com base no valor selecionado
toggleRequiredElements(valorSelecionado);


