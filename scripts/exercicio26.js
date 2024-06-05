/* 
Crie uma arrow function que receba um array de pares chave-valor e retorne um objeto.
*/
console.log("Exercicio 26 OK");

const textoExercicio26Display = document.getElementById("textoExercicio26Display");
const btnExercicio26 = document.getElementById("btnExercicio26");
const resultadoExercicio26 = document.getElementById("solucaoResultadoExercicio26");

let listaExercicio26 = [
  ["nome", "Luiza Cruz"],
  ["idade", 25],
  ["cargo", "Desenvolvedora"],
  ["salario", 5000]
];

const formatarJsonExercicio26 = (json) => {
  return json.replace(/"/g, "'")
    .replace(/,/g, ", ")
    .replace(/:/g, ": "); 
};

textoExercicio26Display.textContent = `Lista: ${formatarJsonExercicio26(JSON.stringify(listaExercicio26))}`;

const converterArrayParaObjetoExercicio26 = (array) => {
  const objeto = {};
  array.forEach(([chave, valor]) => {
    objeto[chave] = valor;
  });
  return objeto;
};

btnExercicio26.addEventListener("click", (e) => {
  e.preventDefault();

  let novoObjeto = converterArrayParaObjetoExercicio26(listaExercicio26);

  resultadoExercicio26.innerHTML = `Novo Objeto: ${formatarJsonExercicio26(JSON.stringify(novoObjeto))}`;
})
