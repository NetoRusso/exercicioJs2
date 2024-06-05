/*
-Crie uma arrow function que receba um array e retorne um novo array sem elementos "falsos" (`false`, `null`, `0`, `""`, `undefined`, `NaN`).
*/
console.log("Exercicio 17 OK");

const listaExercicio17Display = document.getElementById("textoExercicio17");
const btnExercicio17 = document.getElementById("btnExercicio17");
const btnExercicio17Reset = document.getElementById("btnExercicio17Reset");
const resultadoExercicio17 = document.getElementById("solucaoResultadoExercicio17");


let nuloExercicio17 = null;
let vazioExercicio17 = "";
let indefinidoExercicio17;
const listaExercicio17 = ["Banana", 17, (isNaN(7)), (3 + 4), vazioExercicio17, indefinidoExercicio17, '0', nuloExercicio17, "Brasil"]

listaExercicio17Display.textContent = `[ ${listaExercicio17.join(",     ")} ]`;

const filtrarNulosExercicio17 = (lista) => lista.filter(Boolean);

btnExercicio17.addEventListener("click", (e) => {
  e.preventDefault();
  let novaLista = filtrarNulosExercicio17(listaExercicio17);

  resultadoExercicio17.innerHTML = `Lista filtrada: [ ${novaLista.join(",   ")} ]`;
})

btnExercicio17Reset.addEventListener("click", (e)=> {
  e.preventDefault();
  resultadoExercicio17.innerHTML="";
})