/*
Exercício 14-Crie uma arrow function que receba uma string e retorne um objeto com a contagem de cada caractere na string.
*/
console.log("Exercício 14 OK");

const textoExercicio14Input = document.getElementById("textoExercicio14");
const btnExercicio14 = document.getElementById("btnExercicio14");
const resultadoExercicio14 = document.getElementById("solucaoResultadoExercicio14");


const contarCaracteresExercicio14 = (texto) => {
  const contagem = {};

  for (let i = 0; i < texto.length; i++) {
    const caractere = texto[i];
    contagem[caractere] = (contagem[caractere] || 0) + 1;
  }

  return contagem;
};

btnExercicio14.addEventListener("click", (e) => {
  e.preventDefault();
  const texto = textoExercicio14Input.value;
  console.log("Entrou " + texto);
  const contador = contarCaracteresExercicio14(texto);

  resultadoExercicio14.innerHTML = `<p>Contagem de caracteres: ${JSON.stringify(contador, " ")}</p>`;
  textoExercicio14Input.value = "";
});
