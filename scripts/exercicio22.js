/*
Crie uma arrow function que receba um array de números e retorne um novo array contendo apenas os valores únicos (sem duplicatas).
*/
console.log("Exercício 22 OK");

const listaExercicio22Display = document.getElementById("textoExercicio22Display");
const textoExercicio22Input = document.getElementById("textoExercicio22");
const btnExercicio22 = document.getElementById("btnExercicio22");
const btnExercicio22Reset = document.getElementById("btnExercicio22Reset");
const resultadoExercicio22 = document.getElementById("solucaoResultadoExercicio22");

let listaInseridoExercicio22 = [];

const filtrarListaExercicio22 = (lista) => {
  return [...new Set(lista)];
};

btnExercicio22.addEventListener("click", (e) => {
  e.preventDefault();

  let item = textoExercicio22Input.value;
  listaInseridoExercicio22.push(item);
  listaExercicio22Display.textContent = `[ ${listaInseridoExercicio22.join(',   ')} ]`;
  textoExercicio22Input.value = "";

  let resultado = filtrarListaExercicio22(listaInseridoExercicio22);

  resultadoExercicio22.innerHTML = `<p>Lista unificada: [ ${resultado.join(',   ')} ]</p>`;
})

btnExercicio22Reset.addEventListener("click", (e) => {
  e.preventDefault();
  listaInseridoExercicio22 = [];
})