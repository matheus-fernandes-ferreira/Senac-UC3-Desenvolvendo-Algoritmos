var nivel = 1;
var pontuacao = 0;
var nivel = 1;
var vetor = [[1, 2, 3, 4]];
var sequenciaMaquina = [];
var sequenciaDoJogador = [];
function iniciarJogo() {
    

}
var teste = true;
while (.) {
    rodada()
    if (resultado = false) {
        fimDeJogo()
    } else {
        pontuacao += 1;
        nivel += 1;
    }
    fimDejogo()
    pontuacao += 10
    nivel++

}


function rodada() {
    sequenciaMaquina = gerarsequencia()
    exibirSequencia(sequencia)
    var jogadorSequencia = lerJogada()
    var resultado = verificarJogada(jogadorSequencia, sequencia)
    if (resultado == false) {
        return false
    }
}

function gerarsequencia() {

    var sequenciaMaquina = [];
    for (let i = 0; i < nivel; i++) {
        var numero = gerarNumeroAleatorio()
        sequenciaMaquina.push(numero)

        return sequenciaMaquina

    }

    function gerarNumeroAleatorio() {
        let numeroAleatorio = vetor[Math.floor(Math.random() * vetor.length)];
        return numeroAleatorio
    }

}

function fimDeJogo() {
    console.log("fim de jogo");
}






/*while(true)
{
    for(i = 0; i < 10; i++)
    {
        console.log(i)
        if(i >= 4)
    {
        return false
    }
    }
    
}
*/