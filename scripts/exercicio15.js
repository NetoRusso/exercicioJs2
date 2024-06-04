/*
Crie uma arrow function que receba duas funções `f` e `g` e retorne uma nova função que represente a composição `f(g(x))`.
*/
console.log("Exercício 15 OK");

const numeroExercicio15Input = document.getElementById("textoExercicio15");
const btnExercicio15 = document.getElementById("btnExercicio15");
const resultadoExercicio15 = document.getElementById("solucaoResultadoExercicio15");

const comporFuncoesExercicio15 = ( f, g) => x => f(g(x));


btnExercicio15.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio15Input.value);
  let f = (numero) => numero * 2;
  let g = (numero) => numero + 1;
  let composta = comporFuncoesExercicio15(f, g);
  let resultado = composta(numero);
  

  resultadoExercicio15.innerHTML = `<p>(f, g) => ${numero} => f(g(${numero})) && g(${numero}) = ${numero} + 1 && f(x) = x * 2 =>    Resultado:   ${resultado}.</p>`;


  numeroExercicio15Input.value = "";
})
