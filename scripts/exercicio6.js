/*
Exercício 6- Crie uma arrow function que receba um array de números e retorne um novo array contendo apenas os números pares 
*/
console.log("Exercício 06 OK");

const inserirNovoNumeroExercicio6Input = document.getElementById("numeroExercicio6");
const btnExercicio06Filtrar = document.getElementById("btnExercicio6");
const btnExercicio06Resetar = document.getElementById("btnExercicio6reset");
const resultadoExercicio6 = document.getElementById("solucaoResultadoExercicio6");


let listaExercicio6 = [];

const filtrarParesExercicio6 = (l) => {
  let novaLista = [];
  for (i = 0; i < l.length; i++) {
    if (l[i] % 2 === 0) {
      novaLista.push(l[i])
    }
  }
  return novaLista;
}

btnExercicio06Filtrar.addEventListener("click", (e) => {
  e.preventDefault();

  let novoItem = inserirNovoNumeroExercicio6Input.value;
  listaExercicio6.push(novoItem);

  let resultado = filtrarParesExercicio6(listaExercicio6);

  resultadoExercicio6.innerHTML = `<p>Lista inserida = [ ${listaExercicio6.join(", ")} ]</p> <p>Lista Filtrada = [ ${resultado.join(", ")} ]</p>`;

  inserirNovoNumeroExercicio6Input.value = "";
})

btnExercicio06Resetar.addEventListener("click", (e) => {
  e.preventDefault();

  listaExercicio6 = [];
  resultadoExercicio6.innerHTML = "";
  inserirNovoNumeroExercicio6Input.value = "";
})
