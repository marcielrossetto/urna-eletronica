const votos = {
    BOLSONARO: 0,
    TARCISIO: 0,
    LULA: 0,
};

const cliques = {
    BOLSONARO: 0,
    TARCISIO: 0,
    LULA: 0,
};

let percentualTransferidoBolsonaro = 0;
let percentualTransferidoTarcisio = 0;

function votar(candidato) {
    cliques[candidato]++;
    if (candidato === "BOLSONARO") {
        percentualTransferidoBolsonaro += 50;
        votos[candidato]++;
        if (percentualTransferidoBolsonaro >= 100) {
            votos["LULA"]++;
            votos[candidato]--; // Remove um voto de Bolsonaro
            percentualTransferidoBolsonaro -= 100;
        }
    } else if (candidato === "TARCISIO") {
        percentualTransferidoTarcisio += 30;
        votos[candidato]++;
        if (percentualTransferidoTarcisio >= 100) {
            votos["LULA"]++;
            votos[candidato]--; // Remove um voto de Tarcisio
            percentualTransferidoTarcisio -= 100;
        }
    } else if (candidato === "LULA") {
        votos[candidato]++;
    }
    exibirResultado();
}

function exibirResultado() {
    let resultado = "";
    for (const candidato in votos) {
        resultado += `${candidato}: ${votos[candidato]} votos (${cliques[candidato]} cliques)<br>`;
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function mostrarTotal() {
    let totalCliques = 0;
    let totalVotos = 0;
    for (const candidato in votos) {
        totalCliques += cliques[candidato];
        totalVotos += votos[candidato];
    }
    document.getElementById("resultadoTotal").innerHTML = 
        `Total de cliques: ${totalCliques}<br>Total de votos válidos: ${totalVotos}`;
}
