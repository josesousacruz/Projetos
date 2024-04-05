export var config, janelaProgram, id_cliente, janelaEventStar, janelaEventEnd, id_ope_Janela

import { configCalendar } from "./CalendarConfigClass.js";
import { progamEvent } from "./calendarProgam.js";
import { calendarEl, formEdit, modalFuncoes, editModal, form, myModal, dangerAlert, selectOperacao, selectEditOperacao, importProgamModal,selectCliente,selectEditCliente } from "../elementos/index.js";
import { bloqueioEvent } from "./calendarBloqueio.js";
import "../programar/importar.js"
export async function initCalendarAgendamento() {

let calendarAgendamento

async function loadCalendarAndConfig() {
  try {
    config = await configCalendar.carregarConfiguracoes();

    if (calendarEl) {
      calendarLoad();
      returnOptions()
    }

  } catch (error) {
    console.error('Erro ao carregar configurações:', error);
  }
}
loadCalendarAndConfig();

const returnOptions = () => {
  fetch('/clientes')
    .then(response => response.json())
    .then(data =>{
      data.forEach(cl => {
        let optionCliente = new Option(cl.nome,cl.id)
        let optionEditCliente = new Option(cl.nome, cl.id)
        selectEditCliente.add(optionEditCliente)
        selectCliente.add(optionCliente)
      })
    })

  fetch('/operacao')
    .then(response => response.json())
    .then(data => {
      data.forEach(op => {
        let optionOperacao = new Option(op.descricao, op.id);
        let optionEditOperacao = new Option(op.descricao, op.id);
        selectOperacao.add(optionOperacao);
        selectEditOperacao.add(optionEditOperacao);
      });
    })
    .catch(error => console.error('Erro:', error));
}


const calendarLoad = async () => {
  let screenHeight = window.innerHeight;

  if (calendarEl) {
    calendarAgendamento = new FullCalendar.Calendar(calendarEl, {
      titleFormat:{ year: 'numeric', month: 'long', day: 'numeric' },
      contentHeight: screenHeight,
      headerToolbar: config.headerToolbar,
      slotDuration: config.slotDuration,
      slotMaxTime: config.slotMaxTime,
      buttonText: config.buttonText,
      editable: config.editable,
      dayMaxEvents: config.dayMaxEvents,
      events: function(fetchInfo, successCallback, failureCallback) {
        $.ajax({
            url: '/janelas', 
            type: 'GET',
            dataType: 'json',
            data: {
                start: fetchInfo.startStr, // Início da faixa de datas visível
                end: fetchInfo.endStr // Fim da faixa de datas visível
            },
            success: function(data) {
                var events = data.map(element => {
                  let end = element.dia_todo ? moment(element.datahora_fim).add(1, 'minute').format('YYYY-MM-DD HH:mm:ss') : element.datahora_fim;
                  return {
                    id: element.id,
                    title: element.operacao.descricao,
                    start: element.datahora_inicio,
                    end: end,
                    backgroundColor: element.operacao.cor,
                    allDay: element.dia_todo,
                    id_ope: element.operacao.id,
                    cliente: element.id_cliente
                  }
                });
                successCallback(events);
            },
            error: function() {
                failureCallback();
            }
        });
    },
      locale: config.locale,
      allDayText: config.allDayText,
      navLinks: config.navLinks,
      selectable: config.selectable,
      selectMirror: config.selectMirror,
      select: function (arg) {

        var startDateInput = document.getElementById('start-date');
        var endDateInput = document.getElementById('end-date');
        var checkedInput = document.getElementById('dia-todo');

        var dateStrStart = new Date(arg.startStr);
        var dateStrEnd = new Date(arg.endStr);

        if (arg.allDay) {
          dateStrStart = moment(dateStrStart).add(1, 'days').format('YYYY-MM-DD') + ' 00:00';
          dateStrEnd = moment(dateStrEnd).format('YYYY-MM-DD') + ' 23:59';
        } else {
          dateStrStart = moment(dateStrStart).format('YYYY-MM-DD HH:mm:ss')
          dateStrEnd = moment(dateStrEnd).format('YYYY-MM-DD HH:mm:ss')
        }

        startDateInput.value = dateStrStart;
        endDateInput.value = dateStrEnd

        checkedInput.checked = arg.allDay

        myModal.show();

        myModal._element.addEventListener('hide.bs.modal', function () {
          dangerAlert.style.display = 'none';
          form.reset();
        });

        calendarAgendamento.unselect()
      },
      eventClick: function (arg) {
        // Capta o evento de click sobre o evento
        janelaProgram = arg.event.id
        id_ope_Janela = arg.event.extendedProps.id_ope
        id_cliente = arg.event.extendedProps.cliente
        janelaEventStar = arg.event.start
        janelaEventEnd = arg.event.end
        showCustomContextMenu(arg.event)
        modalFuncoes.show();
      },
      eventResize: function (arg) {
        let endDate = arg.event.end;

        if (endDate.getHours() === 0) {
          endDate = new Date(endDate.getTime() - 1000);
        }

        var formattedStart = moment(arg.event.start).format('YYYY-MM-DD HH:mm:ss');
        var formattedEnd = arg.event.end ? moment(endDate).format('YYYY-MM-DD HH:mm:ss') : null;



        let updateEvent = {
          id: arg.event.id,
          datahora_inicio: formattedStart,
          datahora_fim: formattedEnd
        }



        fetch('/janelas/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateEvent)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Erro:', error);
          });

      },
      eventDrop: function (arg) {
        let formattedStart = moment(arg.event.start).format('YYYY-MM-DD HH:mm:ss');
        let formattedEnd = arg.event.end ? moment(arg.event.end).format('YYYY-MM-DD HH:mm:ss') : moment(arg.event.start).format('YYYY-MM-DD') + ' 23:59:00';

        let updateEvent = {
          id: arg.event.id,
          dia_todo: arg.event.allDay,
          datahora_inicio: formattedStart,
          datahora_fim: formattedEnd
        }
        fetch('/janelas/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateEvent)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Erro:', error);
          });

      },
    });

    calendarAgendamento.render();
  }
}


function showCustomContextMenu(event) {
  window.currentEvent = event;

  function withModalHide(action) {
    return function () {
      action();
      modalFuncoes.hide();
    };
  }
  $('#contexEdit').off('click').on('click', withModalHide(editEvent));
  $('#contexDelete').off('click').on('click', withModalHide(deleteEvent));
  $('#contexBloqueio').off('click').on('click', withModalHide(bloqueioEvent));

  console.log(event);
  if (event.extendedProps.id_ope === 1) {
    $('#contexProgramar').off('click').on('click', withModalHide(showProgram));
  }else if(event.extendedProps.id_operacao == 1){
    $('#contexProgramar').off('click').on('click', withModalHide(showProgram));
  } else {
    $('#contexProgramar').off('click').on('click', withModalHide(progamEvent));

  }
}


function showProgram() {
  importProgamModal.show()
}

function editEvent() {
  let titleInput = document.getElementById('select-operacao-edit');
  let clienteInput = document.getElementById('select-cliente-edit');
  let startDateInput = document.getElementById('start-date-edit');
  let endDateInput = document.getElementById('end-date-edit');
  let checkedInput = document.getElementById('dia-todo-edit');
  let editid = document.getElementById('edit-id');

  let eventId = window.currentEvent.id;
  let dataToSend = { id: eventId };
  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend)
  };

  fetch('/janela', requestOptions)
    .then(response => response.json())
    .then(data => {
      titleInput.value = data[0].id_operacao;
      clienteInput.value = data[0].id_cliente;
      editid.value = data[0].id
      startDateInput.value = data[0].datahora_inicio
      endDateInput.value = data[0].datahora_fim
      checkedInput.checked = data[0].dia_todo;
    })
    .catch(error => {
      console.error('Erro ao buscar dados da janela:', error);
    });

  editModal.show();
}

function deleteEvent() {
  let eventId = window.currentEvent.id;
  Swal.fire({
    title: "Você tem certeza que deseja excluir a janela?",
    text: "Não será possivel reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sim, excluir!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deletado!",
        text: "Sua janela foi deletada.",
        icon: "success"
      });

      fetch('/delete-janela/' + eventId, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
          // Atualize o calendário ou a interface do usuário conforme necessário
          window.currentEvent.remove()
        })
        .catch(error => {
          console.error('Erro ao deletar evento:', error);
        });

    }
  });



}

// Insert event
function newWindoWSubmit(event) {
  event.preventDefault();
  let operacao = document.getElementById('select-operacao').value;
  let cliente = document.getElementById('select-cliente').value;
  let startDateInput = document.getElementById('start-date');
  let endDateInput = document.getElementById('end-date');
  let checkedInput = document.getElementById('dia-todo');

  if (endDateInput.value < startDateInput.value) {
    dangerAlert.style.display = 'block';
    return;
  }

  let newEvent = {
    unidade: 258,
    cliente: cliente,
    id_operacao: operacao,
    start: startDateInput.value,
    end: endDateInput.value,
    allDay: checkedInput.checked
  };

  fetch('/janelas/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEvent),
  })
    .then(response => response.json())
    .then(data => {
      var end = moment(data.evento.datahora_fim).format('YYYY-MM-DD HH:mm:ss');
      if (newEvent.allDay) {
        end = moment(data.evento.datahora_fim).add(1, 'minute').format('YYYY-MM-DD HH:mm:ss');
      }

      newEvent['id'] = data.evento.id
      newEvent['extendedProps'] = data.operacao.id
      newEvent['extendedProps'] = data.id_cliente
      newEvent['title'] = data.operacao.descricao
      newEvent['backgroundColor'] = data.operacao.cor
      newEvent['start'] = data.evento.datahora_inicio
      newEvent['end'] = end
      newEvent['allDay'] = data.evento.dia_todo


      calendarAgendamento.addEvent(newEvent);
      console.log(newEvent);
    })
    .catch(error => {
      console.error('Erro ao inserir evento:', error);
    });

  myModal.hide();
  form.reset();
}


form.addEventListener('submit', newWindoWSubmit);
// Update event
function updateWindowSubmit(event) {
  event.preventDefault();
  var operacao = document.getElementById('select-operacao-edit');
  var clienteInput = document.getElementById('select-cliente-edit');
  var startDateInput = document.getElementById('start-date-edit');
  var endDateInput = document.getElementById('end-date-edit');
  var editid = document.getElementById('edit-id');
  var diaTodoEdit = document.getElementById('dia-todo-edit');

  // retrieve the form input values
  if (endDateInput.value < startDateInput.value) {
    dangerAlert.style.display = 'block';
    return;
  }

  let updateEvent = {
    id: editid.value,
    id_operacao: operacao.value,
    datahora_inicio: startDateInput.value,
    datahora_fim: endDateInput.value,
    dia_todo: diaTodoEdit.checked,
    id_cliente: clienteInput.value
  };

  Swal.fire({
    title: "Tem certeza que deseja salvar as alterações?",
    showDenyButton: true,
    confirmButtonText: "Confirmar",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Editado!", "", "success");


      fetch('/janelas/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateEvent),
      })
        .then(response => response.json())
        .then(data => {
          let eventToRemove = calendarAgendamento.getEventById(updateEvent.id);
          eventToRemove.remove();

          const operationTitles = {
            1: { title: 'E->Descarregamento de navio', color: '#0000FF' },
            2: { title: 'S->Ensaque para venda', color: '#00BFFF' },
            3: { title: 'E->Transferência do cliente', color: '#4682B4' },
            4: { title: 'S->Transferência para o cliente', color: '#B0C4DE' }
          };
          if (operationTitles.hasOwnProperty(operacao.value)) {
            var title = operationTitles[operacao.value].title
            var backgroundColor = operationTitles[operacao.value].color;
          }

          calendarAgendamento.addEvent({
            id: updateEvent.id,
            title: title,
            backgroundColor: backgroundColor,
            start: updateEvent.datahora_inicio,
            end: updateEvent.datahora_fim,
            allDay: updateEvent.dia_todo,
          })


        })
        .catch(error => {
          console.error('Erro ao inserir evento:', error);
        });


    } else if (result.isDenied) {
      Swal.fire("Alterações não foram salvas", "", "info");
    }
  });


  editModal.hide();
  form.reset();
}
formEdit.addEventListener('submit', updateWindowSubmit);


}