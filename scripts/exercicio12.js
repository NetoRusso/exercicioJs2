/*
Exercício 12- Crie uma arrow function que receba dois números e retorne a soma deles.
*/
console.log("Exercício 12 OK");

const textoExercicio12 = document.getElementById("textoExercicio12");
const btnExercicio12 = document.getElementById("btnExercicio12");
const listaExercicio12Display = document.getElementById("textoExercicio12");
const resultaddoExercicio12 = document.getElementById("solucaoResultadoExercicio12");

let listaExercicio12 = [1, 3, 2, 5, 3, 1, 6, 7];

listaExercicio12Display.textContent = `[ ${listaExercicio12.join(", ")} ]`;

const removerDuplicatasExercicio12 = (l) => {
  let listaUnica = [];

  for (let i = 0; i < l.length; i++) {
    if (!listaUnica.includes(l[i])) {
      listaUnica.push(l[i])
    }
  }
  return listaUnica;
}

btnExercicio12.addEventListener("click", (e) => {
  e.preventDefault();

  let novaLista = removerDuplicatasExercicio12(listaExercicio12);

  resultaddoExercicio12.innerHTML = `<p> Lista sem Duplicatas: [ ${novaLista.join(", ")} ]</p>`;
})
