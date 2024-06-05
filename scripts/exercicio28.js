/*
-Crie uma arrow function que receba um objeto e retorne um array contendo todos os seus valores.
*/
console.log('Exercício 28 OK');

const textoExercicio28Display = document.getElementById("textoExercicio28Display");
const btnExercicio28 = document.getElementById("btnExercicio28");
const resultadoExercicio28 = document.getElementById("solucaoResultadoExercicio28");

let objetoExercicio28 = {
  nome: "Luiza Cruz",
  idade: 25,
  cargo: "Desenvolvedora",
  salario: 5000
}

const formatarJsonExercicio28 = (json) => {
  return json.replace(/"/g, "'")
    .replace(/,/g, ", ")
    .replace(/:/g, ": ");
};

textoExercicio28Display.textContent = ` ${formatarJsonExercicio28(JSON.stringify(objetoExercicio28))} `;

const obterValoresExercicio28 = (objeto) => {
  return Object.values(objeto);
};




btnExercicio28.addEventListener("click", (e) => {
  e.preventDefault();
  let valores = obterValoresExercicio28(objetoExercicio28);
  resultadoExercicio28.innerHTML = `<p>Valores:  ${JSON.stringify(valores)}</p>`;
})