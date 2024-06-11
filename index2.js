//
//let nomeJogador = 'Jose'


function vitoriasRanked() {
    let vitorias = 1000
    return vitorias
}

function derrotasRanked() {
    let derrotas = 5
    return derrotas
}

function eloRanked(nomeJogador) {
    let elo = ['Ferro','Bronze','Prata','Ouro','Diamente','Lendário','Imortal']
    let vitorias = vitoriasRanked()
    let derrotas = derrotasRanked()
    let saldoVitorias = vitorias - derrotas

    if (saldoVitorias < 10) {
        console.log(`O ${nomeJogador} tem o saldo de ${saldoVitorias} e está no nível ${elo[0]}.`)
    } else if (saldoVitorias <= 20){
        console.log(`O ${nomeJogador} tem o saldo de ${saldoVitorias} e está no nível ${elo[1]}.`)
    } else if (saldoVitorias <= 50){
        console.log(`O ${nomeJogador} tem o saldo de ${saldoVitorias} e está no nível ${elo[2]}.`)
    } else if (saldoVitorias <= 80){
        console.log(`O ${nomeJogador} tem o saldo de ${saldoVitorias} e está no nível ${elo[3]}.`)
    } else if (saldoVitorias <= 90){
        console.log(`O ${nomeJogador} tem o saldo de ${saldoVitorias} e está no nível ${elo[4]}.`)
    } else if (saldoVitorias <= 100){
        console.log(`O ${nomeJogador} tem o saldo de ${saldoVitorias} e está no nível ${elo[5]}.`)
    } else if (saldoVitorias >= 101){
        console.log(`O ${nomeJogador} tem o saldo de ${saldoVitorias} e está no nível ${elo[6]}.`)
    }

    return console.log("Continue jogando para evoluir cada vez mais.")
    
}

eloRanked("José Carlos")