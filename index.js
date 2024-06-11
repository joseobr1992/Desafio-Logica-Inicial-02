//
let nomeJogador = 'Jose'
let elo = ['Ferro','Bronze','Prata','Ouro','Diamente','Lendário','Imortal']

function vitoriasRanked() {
    let vitorias = 1000
    return vitorias
}

function derrotasRanked() {
    let derrotas = 5
    return derrotas
}

function eloRanked() {
    let qtdVitorias = vitoriasRanked()
    let qtdDerrotas = derrotasRanked()
    let resultadoRankeadas = qtdVitorias - qtdDerrotas

    if (resultadoRankeadas < 10) {
        console.log(`O ${nomeJogador} tem o saldo de ${resultadoRankeadas} e está no nível ${elo[0]}.`)
    } else if (resultadoRankeadas <= 20){
        console.log(`O ${nomeJogador} tem o saldo de ${resultadoRankeadas} e está no nível ${elo[1]}.`)
    } else if (resultadoRankeadas <= 50){
        console.log(`O ${nomeJogador} tem o saldo de ${resultadoRankeadas} e está no nível ${elo[2]}.`)
    } else if (resultadoRankeadas <= 80){
        console.log(`O ${nomeJogador} tem o saldo de ${resultadoRankeadas} e está no nível ${elo[3]}.`)
    } else if (resultadoRankeadas <= 90){
        console.log(`O ${nomeJogador} tem o saldo de ${resultadoRankeadas} e está no nível ${elo[4]}.`)
    } else if (resultadoRankeadas <= 100){
        console.log(`O ${nomeJogador} tem o saldo de ${resultadoRankeadas} e está no nível ${elo[5]}.`)
    } else if (resultadoRankeadas >= 101){
        console.log(`O ${nomeJogador} tem o saldo de ${resultadoRankeadas} e está no nível ${elo[6]}.`)
    }
    
}

eloRanked()