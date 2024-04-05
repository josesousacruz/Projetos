import './sidebar/index.js';
// import './controle_acesso/relatorios/relatorios.js';
import './controle_acesso/gerenciamento/gerenciamentos.js'
import { getInfosVeiculosAcesso } from './controle_acesso/triagem/triagem.js';

if (window.location.pathname === '/') {
    import('./calendar/calendarHome.js')
        .then((modulo) => {
            // Chama a função exportada para inicializar o módulo
            modulo.initCalendarHome();
        })
        .catch((erro) => {
            console.error('Erro ao importar o módulo:', erro);
        });
}
if (window.location.pathname === '/agendamento') {
    import('./calendar/calendarAgendamento.js')
        .then((modulo) => {
            // Chama a função exportada para inicializar o módulo
            modulo.initCalendarAgendamento();
        })
        .catch((erro) => {
            console.error('Erro ao importar o módulo:', erro);
        });
}

if (window.location.pathname === '/acesso') {
    import('./controle_acesso/triagem/triagem.js')
        .then((modulo) => {
            // Chama a função exportada para inicializar o módulo
            modulo.initTriagem();
        })
        .catch((erro) => {
            console.error('Erro ao importar o módulo:', erro);
        });
}
 
if (window.location.pathname.includes('/relatorios')) {
    console.log('/relatorios');
    import('./controle_acesso/relatorios/relatorios.js')
        .then((modulo) => {
            // Chama a função exportada para inicializar o módulo
            modulo.initRelatorios();
        })
        .catch((erro) => {
            console.error('Erro ao importar o módulo:', erro);
        });
}

// Lista de URLs para as quais o loading não deve ser exibido
var excecoesLoading = [
    '/programacao/insert',
    'http://cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json',
    '/gerenciamento/pessoas',
    '/gerenciamento/veiculos'
];


$(document).ajaxSend(function(event, jqxhr, settings) {
   let infosVeiculosAcesso = getInfosVeiculosAcesso();
    if(infosVeiculosAcesso.length > 0 ){
       excecoesLoading.push(`/movimentacao/verificar/${infosVeiculosAcesso[0].id_veiculo_cavalo}`);
    }
    if (!excecoesLoading.includes(settings.url)) {
        $("#loading-wrapper").fadeIn();
    }
});

$(document).ajaxComplete(function(event, jqxhr, settings) {
    if (!excecoesLoading.includes(settings.url)) {
        $("#loading-wrapper").fadeOut(2000);
    }
});



window.addEventListener('popstate', function(event) {
    if(event.state && event.state.tipo) {
        carregarConteudo(event.state.tipo);
    }
});
