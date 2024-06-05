/*
Crie uma arrow function que receba uma string e retorne a string invertida.
*/
console.log("Exercício 21 OK");

const textoExercicio21Display = document.getElementById("textoExercicio21Display");
const textoExercicio21Input = document.getElementById("textoExercicio21");
const btnExercicio21 = document.getElementById("btnExercicio21");
const resultadoExercicio21 = document.getElementById("solucaoResultadoExercicio21");

const inverterTextoExercicio21 = (texto) => {
  return texto.split("").reverse().join("");
}

btnExercicio21.addEventListener("click", (e) => {
  e.preventDefault();

  let texto = textoExercicio21Input.value;

  textoExercicio21Display.textContent = texto;

  let textoInvertido = inverterTextoExercicio21(texto);
  resultadoExercicio21.innerHTML = `<p>${textoInvertido}</p>`;
  textoExercicio21Input.value = "";
})