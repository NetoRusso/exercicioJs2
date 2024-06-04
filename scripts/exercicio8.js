/*
Exercício 8- Crie uma arrow function que receba uma string e retorne `true` se for um palíndromo e `false` caso contrário.
*/
console.log("Exercício 08 OK");

const textoExercicio8Input = document.getElementById("textoExercicio8");
const btnExercicio08 = document.getElementById("btnExercicio8");
const resultadoExercicio8 = document.getElementById("solucaoResultadoExercicio8");

const palindromoExercicio8 = (t) => {
  let textoNormalizado = t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let textoInvertido = textoNormalizado.split('').reverse().join('');
  return textoNormalizado === textoInvertido;
}

btnExercicio08.addEventListener("click", (e) => {
  e.preventDefault();

  let texto = textoExercicio8Input.value;
  let resultado = palindromoExercicio8(texto);

  resultadoExercicio8.innerHTML = `A frase " ${texto} " ${resultado ? "é um palindromo" : "não é um palindromo"} portanto " ${resultado} "`;

  textoExercicio8Input.value = "";
})
