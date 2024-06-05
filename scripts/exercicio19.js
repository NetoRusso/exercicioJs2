/* 
Crie uma arrow function que receba múltiplos arrays e retorne um novo array concatenando todos os elementos.
*/
console.log("Exercício 19 OK");

const listaExercicio19Display = document.getElementById("textoExercicio19");
const btnExercicio19 = document.getElementById("btnExercicio19");
const resultadoExercicio19 = document.getElementById("solucaoResultadoExercicio19");

let lista1Exercicio19 = [1, 2, 3, 4, 5];
let lista2Exercicio19 = ["banana", "maçã", "uva", "Laranja", "cacau"];

listaExercicio19Display.innerHTML = `<p>Lista 1: [ ${lista1Exercicio19.join(",   ")} ]</p>
<p>Lista 2: [ ${lista2Exercicio19.join(",  ")} ]</p>`;


const concatenarListasExercicio19 = (...listas) => {
  return listas.reduce((acumulador, listaAtual) => {
    return acumulador.concat(listaAtual);
  },[]);
};

btnExercicio19.addEventListener("click", (e) => {
  e.preventDefault();
  let novaLista = concatenarListasExercicio19(lista1Exercicio19, lista2Exercicio19);

  resultadoExercicio19.innerHTML = `<p>Lista concatenada: [ ${novaLista.join(",   ")} ]</p>`;
})
