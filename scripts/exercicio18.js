/*
-Crie uma arrow function que receba um array de números e retorne o maior número encontrado no array.
*/
console.log("Exercício 18 OK");

const listaExercicio18Display = document.getElementById("textoExercicio18");
const numeroExercicio18Input = document.getElementById("numeroExercicio18");
const btnExercicio18 = document.getElementById("btnExercicio18");
const btnExercicio18Reset = document.getElementById("btnExercicio18Reset");
const resultadoExercicio18 = document.getElementById("solucaoResultadoExercicio18");

let listaInputExercicio18 = [];

const qualOMaiorExercicio18 = (lista) => { 
  if (listaInputExercicio18.length === 0) {
    return null;
  }
  return Math.max(...lista);
}


btnExercicio18.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseFloat(numeroExercicio18Input.value);
  if(!isNaN(numero)) {
    listaInputExercicio18.push(numero);
    listaExercicio18Display.textContent = `[ ${listaInputExercicio18.join("   ,")} ]`
    let ehOMaior = qualOMaiorExercicio18(listaInputExercicio18);
    resultadoExercicio18.innerHTML = `<p>O maior número inserido até o momento é : " ${ehOMaior} "</p>`;
    numeroExercicio18Input.value = "";
  } else {
    resultadoExercicio18.innerHTML = `<p>Por favor insira um valor válido.</p>`;
  }


  numeroExercicio18Input.value = "";  
})

btnExercicio18Reset.addEventListener("click", (e) => {
  e.preventDefault();
  numeroExercicio18Input.value = "";
  listaInputExercicio18 = [];
  resultadoExercicio18.innerHTML = "";
  listaExercicio18Display.textContent = "";
})