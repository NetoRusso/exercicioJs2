/*
-Crie uma arrow function que receba um array de números e retorne um novo array contendo apenas os números ímpares.
*/
console.log("Exercício 29 OK");

const numeroExercicio29Input = document.getElementById("numeroExercicio29");
const textoExercicio29Display = document.getElementById("textoExercicio29Display");
const btnExercicio29 = document.getElementById("btnExercicio29");
const btnExercicio29Reset = document.getElementById("btnExercicio29Reset");
const resultadoExercicio29 = document.getElementById("solucaoResultadoExercicio29");

let listaExercicio29 = [];

const filtrarImparExercicio29 = (lista) => {
  let novaLista = [];
  for (let i = 0; i < lista.length; i++) {
    if(lista[i] % 2 !== 0) {
      novaLista.push(lista[i]);
    }
  }
  return novaLista;
}

btnExercicio29.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio29Input.value);
  listaExercicio29.push(numero);

  textoExercicio29Display.textContent = `Lista inserida : [ ${listaExercicio29.join(",  ")} ]`;

  let resultado = filtrarImparExercicio29(listaExercicio29);

  resultadoExercicio29.innerHTML = `<p>Apenas ímpares: [ ${resultado.join(",   ")} ]</p>`;
  numeroExercicio29Input.value = "";
})

btnExercicio29Reset.addEventListener("click", (e) => {
  e.preventDefault();
  listaExercicio29 = [];
  textoExercicio29Display.textContent="";
  numeroExercicio29Input.value="";
  resultadoExercicio29.innerHTML="";

})