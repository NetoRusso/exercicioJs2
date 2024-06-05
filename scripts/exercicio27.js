/* 
Crie uma arrow function que receba um objeto e retorne um array contendo todas as suas chaves.
*/
console.log("Exercício 27 OK");

const textoExercicio27Display = document.getElementById("textoExercicio27Display");
const btnExercicio27 = document.getElementById("btnExercicio27");
const resultadoExercicio27 = document.getElementById("solucaoResultadoExercicio27");

let objetoExercicio27 = {
  nome: "Luiza Cruz",
  idade: 25,
  cargo: "Desenvolvedora",
  salario: 5000
}

const formatarJsonExercicio27 = (json) => {
  return json.replace(/"/g, "'")
    .replace(/,/g, ", ")
    .replace(/:/g, ": ");
};

textoExercicio27Display.textContent = ` ${formatarJsonExercicio27(JSON.stringify(objetoExercicio27))} `;

const obterChavesExercicio27 = (objeto) => {
  return Object.keys(objeto);
};

btnExercicio27.addEventListener("click", (e) => {
  e.preventDefault();
  let chaves = obterChavesExercicio27(objetoExercicio27);
  resultadoExercicio27.innerHTML = `<p>Chaves:  ${formatarJsonExercicio27(JSON.stringify(chaves))}</p>`;
})