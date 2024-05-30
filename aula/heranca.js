function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome); /*a palavra call chamara a herança, o historico */
}

const pessoa1 = new Pessoa("Thais");
const funcionario1 = new Funcionario("Thais", "dev-front end", 5000);
pessoa1.dizOi();

console.log(pessoa1);
console.log(funcionario1);

/* deverá aparecer essa mensagem:
ntend\modulo 24\aula> node .\heranca.js
Thais diz olá
Pessoa { nome: 'Thais', dizOi: [Function (anonymous)] }
Funcionario {
  cargo: 'dev-front end',
  salario: 5000,
  nome: 'Thais',
  dizOi: [Function (anonymous)]
}*/

