
var nivel = 1;
var pontuacao = 0;
var vetor = [1, 2, 3, 4];
var sequenciaDoJogador = [];
var alerta = document.getElementById('pontos');
var rodada = document.getElementById('rodada');

function gerarNumeroAleatorio() {
    return vetor[Math.floor(Math.random() * vetor.length)];
}
restGame()
sequenciaMaquina = []; 
function iniciarJogo() {
    //for (let i = 0; i < nivel; i++) {
         sequenciaMaquina.push(gerarNumeroAleatorio());
   // }
    exibirSequencia();
}

function exibirSequencia() {
    var exibir = 0;
    var intervalo = setInterval(function() {
        piscar(sequenciaMaquina[exibir]);
        exibir++;
        if (exibir >= sequenciaMaquina.length) {
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
        rodada.innerHTML = nivel;
        nivel++;
        pontuacao += nivel * 10;
        alerta.innerHTML = pontuacao;
        iniciarJogo();
    } else {
        alerta.innerHTML = pontuacao
        // Reiniciar jogo ou parar aqui
        alert('Como eu sou quase um pai para vocês, podem jogar novamente!')
    }
}

function restGame()
{
    nivel = 0;
    pontuacao = 0;
    exibir = 0;
    sequenciaMaquina = [];
    rodada.innerHTML = nivel;
    alerta.innerHTML = pontuacao;
}