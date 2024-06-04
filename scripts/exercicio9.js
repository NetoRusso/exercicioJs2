/*
Exercício 9- Crie uma arrow function que receba um array de números e retorne um novo array com cada valor dobrado.
*/
console.log("Exercício 09 OK");

const inserirNovoNumeroExercicio9Input = document.getElementById("numeroExercicio9");
const btnExercicio9Dobrar = document.getElementById("btnExercicio9");
const btnExercicio9Resetar = document.getElementById("btnExercicio9Resetar");
const resultadoExercicio9 = document.getElementById("solucaoResultadoExercicio9");

let listaExercicio9 = [3, 2, 5];

const dobrarArrayExercicio9 = (l) => {
  let novaLista = [];
  for (let i = 0; i < l.length; i++) {
    novaLista.push(2 * l[i]);
  }
  return novaLista;
}

resultadoExercicio9.innerHTML = `<p>Lista atual: [ ${listaExercicio9.join(", ")} ]</p> <p>Lista Dobrada: [ ${dobrarArrayExercicio9(listaExercicio9).join(", ")} ]</p>`;

btnExercicio9Dobrar.addEventListener("click", (e) => {
  e.preventDefault();

  let novoItem = parseFloat(inserirNovoNumeroExercicio9Input.value);
  if (isNaN(novoItem)) {
    return resultadoExercicio9.innerHTML = `<p>Por favor Insira um valor numérico!</p>`;
  }

  listaExercicio9.push(novoItem);

  let resultado = dobrarArrayExercicio9(listaExercicio9);

  inserirNovoNumeroExercicio9Input.value = "";

  resultadoExercicio9.innerHTML = `<p>Lista atual: [ ${listaExercicio9.join(", ")} ]</p> <p>Lista Dobrada: [ ${resultado.join(", ")} ]</p>`;
})

btnExercicio9Resetar.addEventListener("click", (e) => {
  e.preventDefault();
  listaExercicio9 = [3, 2, 5];
  resultadoExercicio9.innerHTML = `<p>Lista atual: [ ${listaExercicio9.join(", ")} ]</p> <p>Lista Dobrada: [ ${dobrarArrayExercicio9(listaExercicio9).join(", ")} ]</p>`;
})
