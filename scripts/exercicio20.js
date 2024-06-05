/* 
Crie uma arrow function que receba um array de objetos, cada um com uma propriedade `valor`, e retorne a soma de todos os valores.
*/
console.log("Exercício 20 OK");

const listaExercicio20Display = document.getElementById("textoExercicio20");
const btnExercicio20 = document.getElementById("btnExercicio20");
const resultadoExercicio20 = document.getElementById("solucaoResultadoExercicio20");

const listaProdutosExercicio20 = [
  { nome: "Playstation 5", valor: 3559.00 },
  { nome: "Controle Dualsense", valor: 430.01 },
  { nome: "Jogo Hogwarts Legacy", valor: 230.00 },
  { nome: "Jogo Assassin's Creed Mirage", valor: 175.52 },
  { nome: "Jogo Mortal Kombat 1", valor: 188.00 }
];

const formatarValorExercicio20 = (valor) => {
  return `${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
};

let listaFormatadaExercicio20 = listaProdutosExercicio20.map(produto => {
  return `<p>${produto.nome}: ${formatarValorExercicio20(produto.valor)}</p>`;
});

listaExercicio20Display.innerHTML = listaFormatadaExercicio20.join(" ");

const somarValoresExercicio20 = (lista) => {
  return lista.reduce((soma, item) => soma + item.valor, 0)
}

btnExercicio20.addEventListener("click", (e) => {
  e.preventDefault();

  let somaTotal = somarValoresExercicio20(listaProdutosExercicio20);
  resultadoExercicio20.innerHTML = `A soma dos valores é:   ${somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
})