selecaoExercicio.addEventListener("change", (e) => {
  const exercicioSelecionado = e.target.value;

  console.log(e.target.value);
  const exercicios = document.querySelectorAll(".exercicioBox");
  exercicios.forEach(exercicio => {
    exercicio.classList.add("oculto");
    exercicio.classList.remove("visivel");
  });

  const exercicio = document.getElementById(`${exercicioSelecionado}`);
  exercicio.classList.remove("oculto");
  exercicio.classList.add("visivel");
});
