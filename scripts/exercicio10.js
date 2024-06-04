/*
Exercício 10- Crie uma arrow function que receba um número e retorne o seu fatorial.
*/
console.log("Exercício 10 OK");

const numeroExercicio10Input = document.getElementById("numeroExercicio10");
const btnExercicio10 = document.getElementById("btnExercicio10");
const resultadoExercicio10 = document.getElementById("solucaoResultadoExercicio10");

const fatorialExercicio10 = (a) => {
  if (a === 0 || a === 1) {

    return a = 1;
  }
  for (let i = a; i > 1; i--) {
    a = a * (i - 1)
  }
  return a
}


btnExercicio10.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio10Input.value);

  let resultado = fatorialExercicio10(numero);

  resultadoExercicio10.innerHTML = `<p>O valor de ${numero}! = ${resultado}</p>`;

  numeroExercicio10Input.value = "";
})
