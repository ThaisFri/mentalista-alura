var numSecreto = parseInt(Math.random() * 11);
var numTentativas = 3;

// se colocar a variável na função chutar, o programa vai sortear outro número, sendo fora da função o programa sorteia um único número

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numSecreto && numTentativas > 0) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  } else {
    numTentativas -= 1;
    if (numTentativas <= 0) {
      elementoResultado.innerHTML = "Acabaram as chances. O número secreto era " + numSecreto;
    }
    else {
      elementoResultado.innerHTML = "Você errou. Tente novamente. <br> Você tem mais " + numTentativas + " tentativas";
    }
  }
}

// Os operadores || e && são operadores de comparação, Ou seja, eles servem para testar se duas ou mais expressões são verdadeiras ou não. 
// == (Igual a) - é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável.
// === (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.
