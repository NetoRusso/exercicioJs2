/*
Crie uma arrow function que receba um array de strings e um número, e retorne um novo array contendo apenas as strings que tenham um comprimento maior que o número fornecido.
*/
console.log("Exercicio 16 OK");

const listaExercicio16Display = document.getElementById("textoExercicio16");
const numeroExercicio16Input = document.getElementById("numeroExercicio16");
const btnExercicio16 = document.getElementById("btnExercicio16");
const btnExercicio16Reset = document.getElementById("btnExercicio16Reset");
const resultadoExercicio16 = document.getElementById("solucaoResultadoExercicio16");

let listaExercicio16 = ["Minas Gerais", "Pernambuco", "São Paulo", "Goias", "Rio de Janeiro", "Rio Grande do Sul", "Ceará"];


listaExercicio16Display.textContent = `[ ${listaExercicio16.join(",     ")} ]`;

const filtrarStringExercicio16 = (lista, tamanho) => lista.filter(e => e.length > tamanho);

btnExercicio16.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio16Input.value);

  let resultado = filtrarStringExercicio16(listaExercicio16, numero)

  resultadoExercicio16.innerHTML = `[ ${resultado.join(",   ")} ]`;

  numeroExercicio16Input.value = "";
})

btnExercicio16Reset.addEventListener("click", (e) => {
  e.preventDefault();

  resultadoExercicio16.innerHTML = "";
  numeroExercicio16Input.value = "";

})