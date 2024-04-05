import { fetchPrograns } from "./funcoes.js";
import { tableControleAcesso } from "./dataTable.js";
import { registroAcesso } from "../../elementos/index.js";
import { modalConfirInfo, registerMov } from "./funcoes.js";


let infosVeiculosAcesso = []
export function setInfosVeiculosAcesso(novaData) {
    infosVeiculosAcesso = novaData;
}

export function getInfosVeiculosAcesso() {
    return infosVeiculosAcesso;
}
export async function initTriagem() {
    
    $('#formBuscarProgram').on('submit', function (event) {
        event.preventDefault();
        let placaAcesso = $('#placaAcesso').val()
        let cnhAcesso = $('#cnhAcesso').val()
        let cpfAcesso = $('#cpfAcesso').val()
        let id_unidade = 259

        fetchPrograns(placaAcesso, cnhAcesso, cpfAcesso, id_unidade)

    })


    $("#programTable").on('select.dt', function (e, dt, type, indexes) {
        if (type === 'row') {
            setInfosVeiculosAcesso(tableControleAcesso.rows(indexes).data().toArray());
            modalConfirInfo(infosVeiculosAcesso[0])
        }
    });

    $('#btnCancelar').on('click', function () {
        registroAcesso.hide()
    });

    $('#registerAcesso').on('click', function () {
        registerMov(infosVeiculosAcesso[0]);
    })
}