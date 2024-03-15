function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = calcularSaldo(vitorias, derrotas)
    let nivel = determinarNivel(saldoVitorias)   

    return { saldoVitorias, nivel };
}

function calcularSaldo(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;

    return saldoVitorias;
}

function determinarNivel(saldoVitorias) {
    let nivel;

    switch (true) {
        case saldoVitorias < 10:
            nivel = "Ferro";
            break;
        case saldoVitorias >= 10 && saldoVitorias <= 20:
            nivel = "Bronze";
            break;
        case saldoVitorias >= 21 && saldoVitorias <= 50:
            nivel = "Prata";
            break;
        case saldoVitorias >= 51 && saldoVitorias <= 80:
            nivel = "Ouro";
            break;
        case saldoVitorias >= 81 && saldoVitorias <= 90:
            nivel = "Diamante";
            break;
        case saldoVitorias >= 91 && saldoVitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    return nivel;
}

const { saldoVitorias, nivel } = calcularNivel(50, 10);

console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);
