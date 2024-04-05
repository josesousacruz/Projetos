import {motivo, motivoEdit, eventId, startDateInput, endDateInput, editidBloq, calendarElBlock, blockModal, blockModalForm, formBlock, blockModalFormEdit, endDateInputEdit , startDateInputEdit } from "../elementos/index.js";
import { configCalendar } from "./CalendarConfigClass.js";
import { fetchJanelaBloqueio } from "./fetchEvents.js";

let config
async function loadCalendarAndConfig() {
  try {
    config = await configCalendar.carregarConfiguracoes();
  } catch (error) {
    console.error('Erro ao carregar configurações:', error);
  }
}
loadCalendarAndConfig();

let calendarBlock;
export function bloqueioEvent() {
  let eventStart = moment(window.currentEvent.start).format('YYYY-MM-DD');
  let eventEnd = moment(window.currentEvent.end).format('YYYY-MM-DD');
  let eventId = window.currentEvent.id
  let screenHeight = window.innerHeight;


  fetchJanelaBloqueio(eventId).then(arrayBloqs => {
    calendarBlock = new FullCalendar.Calendar(calendarElBlock, {
      titleFormat:{ year: 'numeric', month: 'long', day: 'numeric' },
      contentHeight: screenHeight,
      headerToolbar: config.headerToolbar,
      initialView: 'timeGrid',
      events: arrayBloqs,
      visibleRange: {
        start: eventStart,
        end: eventEnd
      },
      initialDate: eventStart,
      slotDuration: config.slotDuration,
      slotMaxTime: config.slotMaxTime,
      buttonText: config.buttonText,
      editable: config.editable,
      dayMaxEvents: config.dayMaxEvents,
      locale: config.locale,
      allDayText: config.allDayText,
      navLinks: config.navLinks,
      selectable: config.selectable,
      selectMirror: config.selectMirror,
      viewDidMount: function() {
        // Desabilita os botões depois que a visualização do calendário for montada
        $('#calendarBlock .fc-prev-button, #calendarBlock .fc-next-button,#calendarBlock .fc-dayGridMonth-button, #calendarBlock .fc-timeGridWeek-button,#calendarBlock .fc-timeGridDay-button,#calendarBlock .fc-listWeek-button').prop('disabled', true).addClass('disabled-button');
    },
      eventClick: function (arg) {
        arg.jsEvent.preventDefault();
        window.currentEvent = arg.event;

        var $contextMenu = $("#contextMenu");
        $contextMenu.css({
          display: "block",
          left: arg.jsEvent.pageX,
          top: arg.jsEvent.pageY
        });

        arg.jsEvent.stopPropagation();
      },
      select: function (arg) {
        eventId = document.getElementById('event-id');

        startDateInput.value = moment(arg.start).format('YYYY-MM-DD HH:mm:ss');
        endDateInput.value = moment(arg.end).format('YYYY-MM-DD HH:mm:ss');
        eventId.value = window.currentEvent.id;

        blockModalForm.show()
      }

    });


    blockModal.show()
  })


  $('#block-edit').on('shown.bs.modal', function () {
    calendarBlock.render();
  });

}

document.addEventListener('DOMContentLoaded', function () {
  // Insert bloq
  formBlock.addEventListener('submit', function (event) {
    event.preventDefault();
    


    if (endDateInput.value < startDateInput.value) {
      dangerAlert.style.display = 'block';
      return;
    }

    let newBlock = {
      janela: eventId.value,
      title: motivo.value,
      start: startDateInput.value,
      end: endDateInput.value,
      backgroundColor: '#FFA500',
    };


    fetch('janelas/bloqueio/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlock),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        newBlock['id'] = data.evento.id

        console.log(newBlock);

        calendarBlock.addEvent(newBlock);

      })
      .catch(error => {
        console.error('Erro ao inserir evento:', error);
      });

    blockModalForm.hide();
    formBlock.reset();
  });



  $('#menuActionEditar').click(function () {
   let eventId = window.currentEvent.id;

   console.log(eventId);

    fetch('/bloqueios/' + eventId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        motivoEdit.value = data[0].motivo
        startDateInputEdit.value = data[0].datahora_inicio
        endDateInputEdit.value = data[0].datahora_fim
        editidBloq.value = data[0].id
      })
      .catch(error => {
        console.error('Erro ao editar evento:', error);
      });

    blockModalFormEdit.show();
    $('#contextMenu').hide();
  });

  $('#myFormBlock-edit').submit(function (event) {
    event.preventDefault();

    if (endDateInput.value < startDateInput.value) {
      dangerAlert.style.display = 'block';
      return;
    }

    let updateEvent = {
      id: editidBloq.value,
      motivo: motivoEdit.value,
      datahora_inicio: startDateInputEdit.value,
      datahora_fim: endDateInputEdit.value,
    };

    Swal.fire({
      title: "Tem certeza que deseja salvar as alterações?",
      showDenyButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Editado!", "", "success");


        fetch('/bloqueios/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          body: JSON.stringify(updateEvent),
        })
          .then(response => response.json())
          .then(data => {
            blockModalFormEdit.hide();
            console.log(data);
            let eventToRemove = calendarBlock.getEventById(updateEvent.id);
            eventToRemove.remove();

            calendarBlock.addEvent({
              id: updateEvent.id,
              title: updateEvent.motivo,
              start: updateEvent.datahora_inicio,
              end: updateEvent.datahora_fim,
              allDay: updateEvent.dia_todo,
              backgroundColor: '#FFA500'
            })


          })
          .catch(error => {
            console.error('Erro ao inserir evento:', error);
          });


      } else if (result.isDenied) {
        Swal.fire("Alterações não foram salvas", "", "info");
      }
    });


  });



  $('#menuActionExluir').click(function () {
    let eventId = window.currentEvent.id;

    Swal.fire({
      title: "Você tem certeza que deseja excluir o bloqueio?",
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
          text: "O bloqueio foi deletada.",
          icon: "success"
        });

        fetch('/delete-bloqueio/' + eventId, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(data.message);
            window.currentEvent.remove()
          })
          .catch(error => {
            console.error('Erro ao deletar evento:', error);
          });

      }
    });

    $('#contextMenu').hide();
  });




  $(document).click(function (event) {
    if (!$(event.target).closest('#contextMenu').length) {
      $('#contextMenu').hide();
    }
  });
});
