
var nivel = 1;
var pontuacao = 0;
var vetor = [1, 2, 3, 4];
var sequenciaDoJogador = [];
var alerta = document.getElementById('alerta');

function gerarNumeroAleatorio() {
    return vetor[Math.floor(Math.random() * vetor.length)];
}

sequenciaMaquina = []; 
function iniciarJogo() {
    //for (let i = 0; i < nivel; i++) {
         sequenciaMaquina.push(gerarNumeroAleatorio());
   // }
    exibirSequencia();
}

function exibirSequencia() {
    let i = 0;
    let intervalo = setInterval(function() {
        piscar(sequenciaMaquina[i]);
        i++;
        if (i >= sequenciaMaquina.length) {
            clearInterval(intervalo);
        }
    }, 1000);
}

function piscar(numero) {
    var btn = document.getElementById('btn' + numero);
    var corOriginal = btn.style.backgroundColor;
    btn.style.backgroundColor = "white";
    setTimeout(function() {
        btn.style.backgroundColor = corOriginal;
    }, 500);
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        var numero = this.id.replace('btn', '');
        sequenciaDoJogador.push(parseInt(numero, 10));
        if (sequenciaDoJogador.length === sequenciaMaquina.length) {
            verificarSequencia();
        }
    });
});

function verificarSequencia() {
    let acertou = sequenciaDoJogador.every((element, index) => element === sequenciaMaquina[index]);
    sequenciaDoJogador = []; // Resetar para a próxima rodada
    if (acertou) {
        //alert("Você acertou! Próximo nível!");
        alerta.innerHTML = "Você acertou! Próximo nível!"
        nivel++;
        pontuacao += nivel * 10;
        iniciarJogo();
    } else {
        //alert("Você errou! Fim de jogo.\nPontuação: " + pontuacao);
        alerta.innerHTML = "Infelizmente você errou!"
        // Reiniciar jogo ou parar aqui
    }
}
