function Dados(nome) {
    this.nome = nome;
    this.dadosCadastrais = function() {
        console.log(this.nome + ' família do Pedrinho');
    }
}

function Documentos(nome, idade, pai, mae, dataNascimento, rg, cpf, habilitacao, estadoCivil) {
    this.nome = nome;
    this.idade = idade;
    this.pai = pai;
    this.mae = mae;
    this.dataNascimento = dataNascimento;
    this.rg = rg;
    this.cpf = cpf;
    this.habilitacao = habilitacao;
    this.estadoCivil = estadoCivil;

    Dados.call(this, nome);
}

const dados1 = new Dados(" Pedro João Francisco Severino de Souza");
const doc1 = new Documentos("nome", 18, "pai", "mae", "10/05/2010", "1234567", "12345678901", "12345", "solteiro");

dados1.dadosCadastrais();

console.log(dados1);
console.log(doc1);
