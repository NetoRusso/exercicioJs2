/*
Crie uma arrow function que receba uma string e retorne o número de palavras na string.
*/
console.log("Exercício 23 OK");

const textoExercicio23Input = document.getElementById("textoExercicio23");
const btnExercicio23 = document.getElementById("btnExercicio23");
const resultadoExercicio23 = document.getElementById("solucaoResultadoExercicio23");

const contarPalavrasExercicio23 = (texto) => {
  texto - texto.trim();
  let palavras = texto.split(/\s+/);
  return palavras.length;
}

btnExercicio23.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = textoExercicio23Input.value;
  let qtdPalavras = contarPalavrasExercicio23(texto);

  resultadoExercicio23.innerHTML = `Na frase: " ${texto} " tem ${qtdPalavras} palavras.`;
  textoExercicio23Input.value = "";
})