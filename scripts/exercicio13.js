/*
Exercício 13-Crie uma arrow function que receba dois arrays e retorne um novo array contendo todos os elementos dos dois arrays, sem duplicatas.
*/
console.log("Exercício 13 OK");

const listaExercicio13Display = document.getElementById("textoExercicio13");
const novoElementoExercicio13Input = document.getElementById("numeroExercicio13");
const btnExercicio13 = document.getElementById("btnExercicio13");
const resultadoExercicio13 = document.getElementById("solucaoResultadoExercicio13");

let listaExercicio13 = [5, 7, 9];
let listaResolucao13 = []



const concatArrayExercicio13 = (l, n) => {
  let d = []
  for (let i = 0; i < l.length; i++){
    d.push(l[i])
  }
  for (let j = 0; j < n.length; j++ ){
    d.push(n[j])
  }
  return d;
}

listaExercicio13Display.textContent = `[ ${listaExercicio13.join(", ")} ]`;

btnExercicio13.addEventListener("click", (e) => {
  e.preventDefault();

  let novoItem = novoElementoExercicio13Input.value;
  listaResolucao13.push(novoItem);

  let novaLista = concatArrayExercicio13(listaExercicio13, listaResolucao13);

  resultadoExercicio13.innerHTML = `<p>Sua Lista [ ${listaResolucao13.join(", ")} ]</p>Lista concatenada: [ ${novaLista.join(", ")} ]<p>`;
  novoElementoExercicio13Input.value = "";
})
