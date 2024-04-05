import { getVeiculoNoTerminal,fetchRelatorioAcessos } from "./funcoes.js";
import { dataInicioRel,dataFimRel, placaRel, motoristaRel, cnhRel, cpfRel } from "../../elementos/index.js";

export async function initRelatorios() {
getVeiculoNoTerminal(259);

$('#buscarRelAcessos').click(() => {
fetchRelatorioAcessos(dataInicioRel.val(),dataFimRel.val(), placaRel.val(), motoristaRel.val(), cnhRel.val(), cpfRel.val());
})
}