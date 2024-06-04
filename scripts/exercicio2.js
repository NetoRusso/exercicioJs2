/*
Exercício 2-Crie uma arrow function que receba um número e retorne o seu quadrado.
*/
console.log("Exercício 02 OK");

const numeroExercicio2Input = document.getElementById("numero1Exercicio2");
const btnExercicio02 = document.getElementById("btnExercicio2");
const resultadoExercicio2 = document.getElementById("solucaoResultadoExercicio2");

const quadradoExercicio2 = (a) => a * a;

btnExercicio02.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseFloat(numeroExercicio2Input.value);
  let resultado = quadradoExercicio2(numero);

  resultadoExercicio2.innerHTML = `<p> O resultaddo de ${numero}² é = ${resultado}</p>`;


  numeroExercicio2Input.value = "";
})