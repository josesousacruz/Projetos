class CarregarConfiguracoesCalendar {

    carregarConfiguracoes() {
      return new Promise((resolve, reject) => {
        const requestBody = {
          id_unidade_negocio: 5
        };
  
        fetch('/calendar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(data => {
          const config = data[0];
  
          resolve({
            headerToolbar: JSON.parse(config.headerToolbar),
            slotDuration: config.slotDuration,
            slotMaxTime: config.slotMaxTime,
            buttonText: JSON.parse(config.buttonText),
            editable: config.editable,
            dayMaxEvents: config.dayMaxEvents,
            locale: config.locale,
            allDayText: config.allDayText,
            navLinks: config.navLinks,
            selectable: config.selectable,
            selectMirror: config.selectMirror
          });
        })
        .catch(error => {
          console.error('Erro ao buscar configurações do calendar:', error);
          reject(error);
        });
      });
    }
  }

 export const configCalendar = new CarregarConfiguracoesCalendar()
  