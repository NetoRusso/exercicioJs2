/*
Exercício 5- Crie uma arrow function que receba uma string e a retorne em maiúsculas.
*/
console.log("Exercício 05 OK");

const textoExercicio5Input = document.getElementById("textoExercicio5");
const btnExercicio05 = document.getElementById("btnExercicio5");
const resultadoExercicio5 = document.getElementById("solucaoResultadoExercicio5");

const caixaAltaExercicio5 = (a) => a.toUpperCase();

btnExercicio05.addEventListener("click", (e) => {
  e.preventDefault();
  let frase = textoExercicio5Input.value;

  let resultado = caixaAltaExercicio5(frase);

  resultadoExercicio5.innerHTML = `<p>Caixa alta: " ${resultado} ".</p>`;


  textoExercicio5Input.value = "";
})
