//## Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let Vitoria = 30;
let Derrotas = 2;

function rank() {

    let res = Vitoria - Derrotas;
    return res

}

console.log(rank())

let saldoVitorias = rank()

switch (true) {
    case saldoVitorias <= 10:
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de Ferro");
        break;
    case saldoVitorias == 11 || saldoVitorias <= 20:
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de Bronze");
        break;
    case saldoVitorias == 21 || saldoVitorias <= 50:
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de Prata");
        break;
    case saldoVitorias == 51 || saldoVitorias <= 80:
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de Ouro");
        break;
    case saldoVitorias == 81 || saldoVitorias <= 90:
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de diamante");
        break;
    case saldoVitorias == 91 || saldoVitorias <= 100:
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de lendario");
        break;
    case saldoVitorias >= 101:
        console.log("O Herói tem de saldo " + saldoVitorias + " está no nível de Imortal");
        break;

}