/*
Crie uma arrow function que receba um array de números e retorne o produto de todos os números. 
*/
console.log("Exercício 24 OK");

const numeroExercicio24Input = document.getElementById("numeroExercicio24");
const btnExercicio24 = document.getElementById("btnExercicio24");
const btnExercicio24Reset = document.getElementById("btnExercicio24Reset");
const listaExercicio24Display = document.getElementById("textoExercicio24Display");
const resultadoExercicio24 = document.getElementById("solucaoResultadoExercicio24");

let listaExercicio24 = [];

const calcularProdutoExercicio24 = (lista) => {
  if (lista.length === 0) {
    return 0;
  }
  let produto = 1;
  for (let i = 0; i < lista.length; i++) {
    produto *= lista[i];
  }
  return produto;
};

btnExercicio24.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio24Input.value);
  
  listaExercicio24.push(numero);

  listaExercicio24Display.textContent = `Lista inserida: [ ${listaExercicio24.join(",  ")} ]`
  
  let produto = calcularProdutoExercicio24(listaExercicio24);

  resultadoExercicio24.innerHTML = `<p>O produto de todos os elementos é:  ${produto}</p>`;
  numeroExercicio24Input.value = "";
})

btnExercicio24Reset.addEventListener("click", (e) => {
  e.preventDefault();
  listaExercicio24 = [];
  listaExercicio24Display.textContent = "";
  resultadoExercicio24.innerHTML = "";
  numeroExercicio24Input.value = "";
})