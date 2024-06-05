/* 
Crie uma arrow function que receba dois objetos e retorne um novo objeto combinando todas as propriedades dos dois objetos.
*/
console.log("Exercício 25 OK");

const textoExercicio25Display = document.getElementById("textoExercicio25Display");
const btnExercicio25 = document.getElementById("btnExercicio25");
const resultadoExercicio = document.getElementById("solucaoResultadoExercicio25");

const pessoaExercicio25 = {
  nome: "Luiza Cruz",
  idade: 25
}

const profissionalExercicio25 = {
  cargo: "Desenvolvedora",
  salario: 5000,
}

const formatarJsonExercicio25 = (json) => {
  return json.replace(/"/g, "'")
    .replace(/,/g, ", ")
    .replace(/:/g, ": "); 
};

textoExercicio25Display.innerHTML = `<p>Pessoa: ${formatarJsonExercicio25(JSON.stringify(pessoaExercicio25))}</p>  <p>Profissional: ${formatarJsonExercicio25(JSON.stringify(profissionalExercicio25))}</p>`;

const combinarObjetosExercicio25 = (obj1, obj2) => {
  return {...obj1, ...obj2};
};

btnExercicio25.addEventListener("click", (e) => {
  e.preventDefault();
  let novoObjeto = combinarObjetosExercicio25(pessoaExercicio25, profissionalExercicio25);

  resultadoExercicio.innerHTML = `Objeto combinado:  ${formatarJsonExercicio25(JSON.stringify(novoObjeto))}`;
})
