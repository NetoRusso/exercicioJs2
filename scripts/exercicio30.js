/**
-Crie uma arrow function que receba um array de objetos e uma propriedade, e retorne um objeto agrupando os elementos por essa propriedade.
 */
console.log("Exercicio 30 OK");


const textoExercicio30Display = document.getElementById("textoExercicio30Display");
const btnExercicio30 = document.getElementById("btnExercicio30");
const resultadoExercicio30 = document.getElementById("solucaoResultadoExercicio30");

let objetosExercicio30 = [
  { nome: "Luiza Cruz", idade: 25, cargo: "Desenvolvedora", salario: 5000 },
  { nome: "Renato Oliveira", idade: 35, cargo: "Designer", salario: 3400 },
  { nome: "Gustavo vieira", idade: 23, cargo: "Designer", salario: 7200 }
]

textoExercicio30Display.textContent = `Objetos: ${JSON.stringify(objetosExercicio30)}`;

const agruparPorPropriedadeExercicio30 = (lista, propriedade) => {
  let agrupamento = {};
  lista.forEach(objeto => {
    let valor = objeto[propriedade];
    if (!agrupamento[valor]) {
      agrupamento[valor] = [];
    }
    agrupamento[valor].push(objeto);
  });
  return agrupamento;
};

btnExercicio30.addEventListener("click", (e) => {
  e.preventDefault();

  let resultado = agruparPorPropriedadeExercicio30(objetosExercicio30, "cargo")
  resultadoExercicio30.innerHTML = `<p>Agrupamento: ${JSON.stringify(resultado)}</p>`;
})