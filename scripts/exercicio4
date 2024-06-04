/*
Exercício 4- Crie uma arrow function que receba uma idade e retorne `"Maior de Idade"` se a idade for maior ou igual a 18 e `"Menor de Idade"` caso contrário.
*/
console.log("Exercício 04 OK");

const larguraExercicio4Input = document.getElementById("larguraExercicio4");
const alturaExercicio4Input = document.getElementById("alturaExercicio4");
const btnExercicio4 = document.getElementById("btnExercicio4");
const resultadoExercicio4 = document.getElementById("solucaoResultadoExercicio4");

const areaRetanguloExercicio4 = (largura, altura) => largura * altura;

btnExercicio4.addEventListener("click", (e) => {
  e.preventDefault();

  let largura = parseFloat(larguraExercicio4Input.value);
  let altura = parseFloat(alturaExercicio4Input.value);

  if (isNaN(largura) || isNaN(altura)) {
    return resultadoExercicio4.innerHTML = `<p>Por favor insira um valor válido</p>`;
  }

  let resultado = areaRetanguloExercicio4(largura, altura);
  resultadoExercicio4.innerHTML = `<p>A área do retângulo é ${resultado}cm².</p>`;

  larguraExercicio4Input.value = "";
  alturaExercicio4Input.value = "";
})
