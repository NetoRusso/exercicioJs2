/*
Exercício 11- Crie uma arrow function que receba uma matriz (array de arrays) e retorne a sua transposta.
*/
console.log("Exercício 11 OK");

const textoExercicio11 = document.getElementById("textoExercicio11");
const btnExercicio11 = document.getElementById("btnExercicio11");
const resultaddoExercicio11 = document.getElementById("solucaoResultadoExercicio11");

let listaExercicio11 = [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5]];

textoExercicio11.textContent = `Matriz Original: ${JSON.stringify(listaExercicio11)}`;

const obterTranspostaExercicio11 = (matriz) => {
  let linhas = matriz.length;
  let colunas = matriz[0].length;

  let transposta = Array(colunas).fill(null).map(() => Array(linhas).fill(null));

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      transposta[j][i] = matriz[i][j];
    }
  }
  return transposta;
}

btnExercicio11.addEventListener("click", (e) => {
  e.preventDefault();

  let resultado = obterTranspostaExercicio11(listaExercicio11);
  resultaddoExercicio11.innerHTML = `Matriz transposta:  ${JSON.stringify(resultado)}`;


})
