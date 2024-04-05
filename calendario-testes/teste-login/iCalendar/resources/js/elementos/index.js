// DOM Elements
export const selectOperacao = document.getElementById('select-operacao');
export const selectCliente = document.getElementById('select-cliente');


export const selectEditCliente = document.getElementById('select-cliente-edit');
export const selectEditOperacao = document.getElementById('select-operacao-edit');
export const collapseElements = document.querySelectorAll('.multi-collapse');
export const activeCollapses = document.querySelectorAll('.multi-collapse.show').length;
export const calendarEl = document.getElementById('agendamentoCalendar');
export const calendarElProg = document.getElementById('calendarProg');
export const form = document.getElementById('myForm');
export const formEdit = document.getElementById('myFormEdit');
export const formBlock = document.getElementById('myFormBlock');
export const dangerAlert = document.getElementById('danger-alert');
export const calendarElemtHome = document.getElementById('homeCalendar');
export var startDateInput = document.getElementById('start-date-block');
export var endDateInput = document.getElementById('end-date-block');
export var motivoEdit = document.getElementById('motivo-block-edit');
export var startDateInputEdit = document.getElementById('start-date-block-edit');
export var endDateInputEdit = document.getElementById('end-date-block-edit');
export var editidBloq = document.getElementById('edit-id-bloq');
export var calendarElBlock = document.getElementById('calendarBlock');
export var eventId = document.getElementById('event-id');
export var motivo = document.getElementById('motivo-block');

// jQuery Elements
export var dataInicioRel = $('#datainicio');
export var dataFimRel = $('#datafim');
export var placaRel = $('#placa');
export var motoristaRel = $('#motorista');
export var cnhRel = $('#cnh');
export var cpfRel = $('#cpf');
export var msgPrincipal = $('#msgPrincipal');
export var msgSecundaria = $('#msgSecundaria');
export var btnControleAcesso = $('#btnControleAcesso');

// Bootstrap Modals
export const myModal = new bootstrap.Modal(document.getElementById('form'));
export const editModal = new bootstrap.Modal(document.getElementById('form-edit'));
export const blockModal = new bootstrap.Modal(document.getElementById('block-edit'));
export const modalFuncoes = new bootstrap.Modal(document.getElementById('modalFuncoes'));
export const blockModalForm = new bootstrap.Modal(document.getElementById('form-bloqueio'));
export const registroAcesso = new bootstrap.Modal(document.getElementById('registroAcesso'));
export const blockModalFormEdit = new bootstrap.Modal(document.getElementById('form-bloqueio-edit'));
export const progamModal = new bootstrap.Modal(document.getElementById('modal-prog'));
export const importProgamModal = new bootstrap.Modal(document.getElementById('modal-prog-import'));
export const cameraModal = new bootstrap.Modal(document.getElementById('cameraModal'));
export const modalDetalhesMotorista = new bootstrap.Modal(document.getElementById('modalDetalhesMotorista'));
