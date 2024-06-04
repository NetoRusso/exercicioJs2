/*
Exercício 7- Crie uma arrow function que receba um array de números e retorne a média dos números.
*/
console.log("Exercício 07 OK");

const inserirNovoNumeroExercicio7Input = document.getElementById("numeroExercicio7");
const btnExercicio07Inserir = document.getElementById("btnExercicio7");
const btnExercicio07Resetar = document.getElementById("btnExercicio7reset");
const resultadoExercicio7 = document.getElementById("solucaoResultadoExercicio7");

let listaExercicio7 = [];

const mediaExercicio7 = (l) => {
  let total = 0;
  for (let i = 0; i < l.length; i++) {
    total += l[i];
  }
  return total / l.length;
}

btnExercicio07Inserir.addEventListener("click", (e) => {
  e.preventDefault();

  let novoItem = parseFloat(inserirNovoNumeroExercicio7Input.value);

  if (isNaN(novoItem)) {
    return resultadoExercicio7.innerHTML = `Por favor insira um valor válido`;
  }

  listaExercicio7.push(novoItem);

  let resultado = mediaExercicio7(listaExercicio7);

  resultadoExercicio7.innerHTML = `<p>Os valores iseridos são : [ ${listaExercicio7.join(", ")} ] a média = ${resultado.toFixed(2)} </p>`;

  inserirNovoNumeroExercicio7Input.value = "";
})

btnExercicio07Resetar.addEventListener("click", (e) => {
  e.preventDefault();

  listaExercicio7 = [];
  inserirNovoNumeroExercicio7Input.value = "";
  resultadoExercicio7.innerHTML = "";
})
