import { progamModal, calendarElProg, importProgamModal } from "../elementos/index.js";
import { janelaProgram, janelaEventStar, janelaEventEnd } from "./calendarAgendamento.js";
import { configCalendar } from "./CalendarConfigClass.js";

export var config, calendarStart, oldStart, oldEnd, slotStart, slotEnd, selectStart, selectEnd, selectStart2, selectEnd2


async function loadCalendarAndConfig() {
    try {
        config = await configCalendar.carregarConfiguracoes();
    } catch (error) {
        console.error('Erro ao carregar configurações:', error);
    }
}
loadCalendarAndConfig();

export function progamEvent() {
    let currentDate = moment().format('YYYY-MM-DD');
    let eventStartMoment = moment(janelaEventStar).format('YYYY-MM-DD');
    let screenHeight = window.innerHeight;


    if (currentDate > eventStartMoment) {

        calendarStart = currentDate;
    } else {

        calendarStart = eventStartMoment;
    }

    $.get('/janelas/bloqueios/' + janelaProgram, function (data) {
        var intervalosBloqueados = data.map(element => ({
            id: element.id,
            title: element.motivo,
            start: element.datahora_inicio,
            end: element.datahora_fim,
            id_janela: element.id_janela
        }));
        var calendarProg = new FullCalendar.Calendar(calendarElProg, {
            titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
            contentHeight: screenHeight,
            headerToolbar: config.headerToolbar,
            visibleRange: {
                start: calendarStart,
                end: janelaEventEnd
            },
            initialDate: calendarStart,
            initialView: 'timeGrid',
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
            viewDidMount: function () {
                // Desabilita os botões depois que a visualização do calendário for montada
                $('#calendarProg .fc-prev-button, #calendarProg .fc-next-button,#calendarProg .fc-dayGridMonth-button, #calendarProg .fc-timeGridWeek-button,#calendarProg .fc-timeGridDay-button,#calendarProg .fc-listWeek-button').prop('disabled', true).addClass('disabled-button');
            },
            dateClick: function (arg) {
                if (arg.allDay) {
                    slotStart = moment(arg.dateStr).format('YYYY-MM-DD') + ' 00:00';
                    slotEnd = moment(arg.dateStr).format('YYYY-MM-DD') + ' 23:59';
                } else {
                    slotStart = moment(arg.dateStr).format('YYYY-MM-DD HH:mm:ss');
                    slotEnd = moment(arg.dateStr).add(2, 'hours').format('YYYY-MM-DD HH:mm:ss');
                }


                importProgamModal.show()
            },
            selectAllow: function (selectInfo) {
                eventEnd = moment(window.currentEvent.end).add(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
                eventStart = moment(window.currentEvent.start).format('YYYY-MM-DD HH:mm:ss');
                selectStart = moment(selectInfo.startStr).format('YYYY-MM-DD HH:mm:ss');
                selectEnd = moment(selectInfo.endStr).format('YYYY-MM-DD HH:mm:ss');
                selectStart2 = moment(selectInfo.startStr);
                selectEnd2 = moment(selectInfo.endStr);

                // Verifica se a seleção está fora do intervalo permitido
                if (selectStart < eventStart || selectEnd > eventEnd) {
                    return false; // Bloqueia a seleção fora do intervalo permitido
                }

                // Verifica se o intervalo selecionado se sobrepõe a qualquer intervalo bloqueado
                for (var i = 0; i < intervalosBloqueados.length; i++) {
                    var bloqueioStart = moment(intervalosBloqueados[i].start);
                    var bloqueioEnd = moment(intervalosBloqueados[i].end);

                    if (selectStart2 < bloqueioEnd && selectEnd2 > bloqueioStart) {
                        return false; // Bloqueia a seleção
                    }
                }

                return true; // Permite a seleção
            },

        });

        calendarProg.addEventSource(intervalosBloqueados.map(function (intervalo) {
            return {
                title: intervalo.title,
                start: intervalo.start,
                end: intervalo.end,
                rendering: 'background',
                color: '#A9A9A9',
                overlap: false // Impede que outros eventos sejam criados neste intervalo
            };
        }));



        calendarStart = moment(calendarProg.view.activeStart).subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
        var calendarEnd = moment(calendarProg.view.activeEnd).format('YYYY-MM-DD HH:mm:ss');
        var eventEnd = moment(window.currentEvent.end).format('YYYY-MM-DD HH:mm:ss');
        var eventStart = moment(window.currentEvent.start).format('YYYY-MM-DD HH:mm:ss');
        var currentDay = moment().format('YYYY-MM-DD HH:mm:ss');

        // Cria um evento de fundo para o intervalo antes do eventStart
        let beforeEvent = {
            title: 'Intervalo indisponivel',
            start: calendarStart,  // início do calendário
            end: eventStart,       // início do evento
            rendering: 'background',
            color: '#ffcccc'
        };
        let afterEvent = {
            title: 'Intervalo indisponivel',
            start: eventEnd,
            end: calendarEnd,
            rendering: 'background',
            color: '#ffcccc'
        };


        if (currentDay > eventEnd) {
            oldStart = eventStart
            oldEnd = eventEnd
        } else {
            oldStart = ''
            oldEnd = ''
        }

        let oldEvent = {
            title: 'Intervalo indisponivel',
            start: oldStart,
            end: oldEnd,
            rendering: 'background',
            color: '#ffcccc'
        }

        // Adicionando os eventos a um array
        let backgroundEvents = [beforeEvent, afterEvent, oldEvent];

        calendarProg.addEventSource(backgroundEvents);

        if (eventEnd < currentDay) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'O prazo da janela já foi ultrapassado!',
            })
        } else {
            progamModal.show();
            $('#modal-prog').on('shown.bs.modal', function () {
                calendarProg.render();

                // setTimeout(function() {
                //     $('.fc-dayGridMonth-button, .fc-timeGridWeek-button, .fc-timeGridDay-button, .fc-listWeek-button').prop('disabled', true).addClass('disabled-button');
                // }, 100);
            });
        }

    }).fail(function (jqXHR, textStatus, error) {
        console.error('Erro ao buscar eventos:', error);
    });


}
