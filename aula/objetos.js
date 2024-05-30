 /*const carroDoJoao = { objeto

}*/


const carroDoJoao = {
    modelo: 'fiesta',
    anoModelo:'2020',    /* => atributos do objeto*/
    anoFabricacao: '2019',
    fabricante: 'ford',
     acelerar: function() { /* =>função*/
        console.log("vrumm")
     }

}

const carroDaMaria = {
    modelo: 'ka',
    anoModelo:'2020',    /* => atributos do objeto*/
    anoFabricacao: '2019',
    fabricante: 'ford',
    acelerar: function() { /* =>função*/
        console.log("vrumm")
     }

}


/*funções construtoras, utilizadas em projetos maiores*/

function Carro (modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;  /*this é o mesmo que o carro*/
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

    const carroDoJoao2 = new Carro("fiesta", 2020, 2019, "ford" );
    const carroDaMaria2 = new Carro("ka", 2020, 2019, "ford");

    console.log (carroDoJoao);
    console.log (carroDaMaria);
/* pra chamar é necessario a palavra new*/