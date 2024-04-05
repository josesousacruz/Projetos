export function fetchEvents() {
  return new Promise((resolve, reject) => {
      $.get('/janelas')
          .done(data => {
              const events = data.map(element => {
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
              resolve(events);
          })
          .fail(error => {
              console.error('Erro ao buscar eventos:', error);
              reject(error);
          });
  });
}

export function fetchJanelaBloqueio(id) {
  return new Promise((resolve, reject) => {
      $.get('/janelas/bloqueios/' + id)
          .done(data => {
              const blocks = data.map(element => ({
                  id: element.id,
                  title: element.motivo,
                  start: element.datahora_inicio,
                  end: element.datahora_fim,
                  backgroundColor: '#FFA500', // Cor de fundo fixa para todos os bloqueios
                  id_janela: element.id_janela
              }));
              resolve(blocks);
          })
          .fail((jqXHR, textStatus, errorThrown) => {
              console.log('Erro ao buscar bloqueios', textStatus, errorThrown);
              reject(errorThrown);
          });
  });
}

