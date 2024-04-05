export var config
import { configCalendar } from "./CalendarConfigClass.js";
import { calendarElemtHome } from "../elementos/index.js";


export async function initCalendarHome() {

  async function loadCalendarAndConfig() {
    try {
      config = await configCalendar.carregarConfiguracoes();
      calendarLoadHome()
    } catch (error) {
      console.error('Erro ao carregar configurações:', error);
    }
  }
  loadCalendarAndConfig();
  let homeCalendars

  const calendarLoadHome = () => {
    let screenHeight = window.innerHeight;

    if (calendarElemtHome) {
      homeCalendars = new FullCalendar.Calendar(calendarElemtHome, {
        titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
        contentHeight: screenHeight,
        headerToolbar: config.headerToolbar,
        slotDuration: config.slotDuration,
        slotMaxTime: config.slotMaxTime,
        buttonText: config.buttonText,
        editable: false,
        dayMaxEvents: config.dayMaxEvents,
        events: function (fetchInfo, successCallback, failureCallback) {
          $.ajax({
            url: '/janelas',
            type: 'GET',
            dataType: 'json',
            data: {
              start: fetchInfo.startStr, // Início da faixa de datas visível
              end: fetchInfo.endStr // Fim da faixa de datas visível
            },
            success: function (data) {
              var events = data.map(element => {
                let end = element.dia_todo ? moment(element.datahora_fim).add(1, 'minute').format('YYYY-MM-DD HH:mm:ss') : element.datahora_fim;
                return {
                  id: element.id,
                  title: element.operacao.descricao,
                  start: element.datahora_inicio,
                  end: end,
                  backgroundColor: element.operacao.cor,
                  allDay: element.dia_todo
                }
              });
              successCallback(events);
            },
            error: function () {
              failureCallback();
            }
          });
        },
        locale: config.locale,
        allDayText: config.allDayText,
        navLinks: config.navLinks,
        selectable: false,
        eventMouseEnter: function (mouseEnterInfo) {
          console.log(mouseEnterInfo.event.title);
        },
      });


      homeCalendars.render();
    }
  }

}