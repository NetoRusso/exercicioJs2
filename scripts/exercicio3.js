/*
Exercício 3-- Crie uma arrow function que receba uma idade e retorne `"Maior de Idade"` se a idade for maior ou igual a 18 e `"Menor de Idade"` caso contrário.
*/
console.log("Exercício 03 OK");

const idadeExercicio3Input = document.getElementById("numeroExercicio3");
const btnExercicio03 = document.getElementById("btnExercicio3");
const resultadoExercicio3 = document.getElementById("solucaoResultadoExercicio3");

const maiorDeIdadeExercicio3 = (a) => a >= 18 ? "Maior de idade" : "Menor de idade";



btnExercicio03.addEventListener("click", (e) => {
  e.preventDefault();

  let idade = parseInt(idadeExercicio3Input.value);
  let resultado = maiorDeIdadeExercicio3(idade);

  resultadoExercicio3.innerHTML = `<p>${resultado}</p>`;

  idadeExercicio3Input.value = "";
})
