

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



/*
Exercício 01 - Crie uma arrow function que receba dois números e retorne a soma deles.
*/
console.log("Exercício 01 OK");

const numero01Exercicio1Input = document.getElementById("numero1Exercicio1");
const numero02Execicio1Input = document.getElementById("numero2Exercicio1");
const btnExercicio01 = document.getElementById("btnExercicio1");
const resultadoExercicio1 = document.getElementById("solucaoResultadoExercicio1");

const somaExercicio1 = (a, b) => a + b;

btnExercicio01.addEventListener("click", (e) => {
  e.preventDefault();
  let numero01 = parseFloat(numero01Exercicio1Input.value);
  let numero02 = parseFloat(numero02Execicio1Input.value);

  if (isNaN(numero01) || isNaN(numero02)) {
    resultadoExercicio1.innerHTML = `<p>Por favor insira um valor válido</p>`;
    return;
  }

  let resultado = somaExercicio1(numero01, numero02);

  resultadoExercicio1.innerHTML = `<p> O resultado de ${numero01} + ${numero02} = ${resultado} </p>`;

  numero01Exercicio1Input.value = "";
  numero02Execicio1Input.value = "";
})

/*
Exercício 2-Crie uma arrow function que receba um número e retorne o seu quadrado.
*/
console.log("Exercício 02 OK");

const numeroExercicio2Input = document.getElementById("numero1Exercicio2");
const btnExercicio02 = document.getElementById("btnExercicio2");
const resultadoExercicio2 = document.getElementById("solucaoResultadoExercicio2");

const quadradoExercicio2 = (a) => a * a;

btnExercicio02.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseFloat(numeroExercicio2Input.value);
  let resultado = quadradoExercicio2(numero);

  resultadoExercicio2.innerHTML = `<p> O resultaddo de ${numero}² é = ${resultado}</p>`;


  numeroExercicio2Input.value = "";
})

/*
Exercício 3-- Crie uma arrow function que receba uma idade e retorne `"Maior de Idade"` se a idade for maior ou igual a 18 e `"Menor de Idade"` caso contrário.
*/
console.log("Exercício 03 OK");

const idadeExercicio3Input = document.getElementById("numeroExercicio3");
const btnExercicio03 = document.getElementById("btnExercicio3");
const resultadoExercicio3 = document.getElementById("solucaoResultadoExercicio3");

const maiorDeIdadeExercicio3 = (a) => a >= 18 ? "Maior de idade" : "Menor de idade";



btnExercicio03.addEventListener("click", (e) => {
  e.preventDefault();

  let idade = parseInt(idadeExercicio3Input.value);
  let resultado = maiorDeIdadeExercicio3(idade);

  resultadoExercicio3.innerHTML = `<p>${resultado}</p>`;

  idadeExercicio3Input.value = "";
})

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

/*
Exercício 5- Crie uma arrow function que receba uma string e a retorne em maiúsculas.
*/
console.log("Exercício 05 OK");

const textoExercicio5Input = document.getElementById("textoExercicio5");
const btnExercicio05 = document.getElementById("btnExercicio5");
const resultadoExercicio5 = document.getElementById("solucaoResultadoExercicio5");

const caixaAltaExercicio5 = (a) => a.toUpperCase();

btnExercicio05.addEventListener("click", (e) => {
  e.preventDefault();
  let frase = textoExercicio5Input.value;

  let resultado = caixaAltaExercicio5(frase);

  resultadoExercicio5.innerHTML = `<p>Caixa alta: " ${resultado} ".</p>`;


  textoExercicio5Input.value = "";
})

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

/*
Exercício 8- Crie uma arrow function que receba uma string e retorne `true` se for um palíndromo e `false` caso contrário.
*/
console.log("Exercício 08 OK");

const textoExercicio8Input = document.getElementById("textoExercicio8");
const btnExercicio08 = document.getElementById("btnExercicio8");
const resultadoExercicio8 = document.getElementById("solucaoResultadoExercicio8");

const palindromoExercicio8 = (t) => {
  let textoNormalizado = t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let textoInvertido = textoNormalizado.split('').reverse().join('');
  return textoNormalizado === textoInvertido;
}

btnExercicio08.addEventListener("click", (e) => {
  e.preventDefault();

  let texto = textoExercicio8Input.value;
  let resultado = palindromoExercicio8(texto);

  resultadoExercicio8.innerHTML = `A frase " ${texto} " ${resultado ? "é um palindromo" : "não é um palindromo"} portanto " ${resultado} "`;

  textoExercicio8Input.value = "";
})

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

/*
Exercício 10- Crie uma arrow function que receba um número e retorne o seu fatorial.
*/
console.log("Exercício 10 OK");

const numeroExercicio10Input = document.getElementById("numeroExercicio10");
const btnExercicio10 = document.getElementById("btnExercicio10");
const resultadoExercicio10 = document.getElementById("solucaoResultadoExercicio10");

const fatorialExercicio10 = (a) => {
  if (a === 0 || a === 1) {

    return a = 1;
  }
  for (let i = a; i > 1; i--) {
    a = a * (i - 1)
  }
  return a
}


btnExercicio10.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio10Input.value);

  let resultado = fatorialExercicio10(numero);

  resultadoExercicio10.innerHTML = `<p>O valor de ${numero}! = ${resultado}</p>`;

  numeroExercicio10Input.value = "";
})

/*
Exercício 11- Crie uma arrow function que receba uma matriz (array de arrays) e retorne a sua transposta.
*/
console.log("Exercício 11 OK");

const textoExercicio11 = document.getElementById("textoExercicio11");
const btnExercicio11 = document.getElementById("btnExercicio11");
const resultaddoExercicio11 = document.getElementById("solucaoResultadoExercicio11");

let listaExercicio11 = [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5]];

textoExercicio11.textContent = `Matriz Original: ${JSON.stringify(listaExercicio11)}`;

const obterTranspostaExercicio11 = (matriz) => {
  let linhas = matriz.length;
  let colunas = matriz[0].length;

  let transposta = Array(colunas).fill(null).map(() => Array(linhas).fill(null));

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      transposta[j][i] = matriz[i][j];
    }
  }
  return transposta;
}

btnExercicio11.addEventListener("click", (e) => {
  e.preventDefault();

  let resultado = obterTranspostaExercicio11(listaExercicio11);
  resultaddoExercicio11.innerHTML = `Matriz transposta:  ${JSON.stringify(resultado)}`;


})

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

/*
Crie uma arrow function que receba duas funções `f` e `g` e retorne uma nova função que represente a composição `f(g(x))`.
*/
console.log("Exercício 15 OK");

const numeroExercicio15Input = document.getElementById("textoExercicio15");
const btnExercicio15 = document.getElementById("btnExercicio15");
const resultadoExercicio15 = document.getElementById("solucaoResultadoExercicio15");

const comporFuncoesExercicio15 = ( f, g) => x => f(g(x));


btnExercicio15.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio15Input.value);
  let f = (numero) => numero * 2;
  let g = (numero) => numero + 1;
  let composta = comporFuncoesExercicio15(f, g);
  let resultado = composta(numero);
  

  resultadoExercicio15.innerHTML = `<p>(f, g) => ${numero} => f(g(${numero})) && g(${numero}) = ${numero} + 1 && f(x) = x * 2 =>    Resultado:   ${resultado}.</p>`;


  numeroExercicio15Input.value = "";
})

