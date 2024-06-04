/*
Exercício 01 - Crie uma arrow function que receba dois números e retorne a soma deles.
*/
console.log("Exercício 01 OK");

const numero01Exercicio1Input = document.getElementById("numero1Exercicio1");
const numero02Execicio1Input = document.getElementById("numero2Exercicio1");
const btnExercicio01 = document.getElementById("btnExercicio1");
const resultadoExercicio1 = document.getElementById("solucaoResultadoExercicio1");

const somaExercicio1 = (a, b) => a + b;

btnExercicio01.addEventListener("click", (e) => {
  e.preventDefault();
  let numero01 = parseFloat(numero01Exercicio1Input.value);
  let numero02 = parseFloat(numero02Execicio1Input.value);

  if (isNaN(numero01) || isNaN(numero02)) {
    resultadoExercicio1.innerHTML = `<p>Por favor insira um valor válido</p>`;
    return;
  }

  let resultado = somaExercicio1(numero01, numero02);

  resultadoExercicio1.innerHTML = `<p> O resultado de ${numero01} + ${numero02} = ${resultado} </p>`;

  numero01Exercicio1Input.value = "";
  numero02Execicio1Input.value = "";
})
