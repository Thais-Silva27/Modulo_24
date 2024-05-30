    function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;


    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome); 
}

const funcionario1 = new Funcionario("Thais", "dev-front end", 5000);
const pessoa = new Pessoa("Thais");


funcionario1.dizOi();
funcionario1.dizCargo();


funcionario1.salario = 1000
console.log(funcionario1)

/* falha no encapsulamento significa que qualquer pessoa pode alterar o dado, como salario por exemplo:
PS C:\Users\thays\OneDrive\Área de Trabalho\curso programação\frontend\modulo 24\aula> node .\encapsulamento.js
Thais diz olá
dev-front end
Funcionario {
  cargo: 'dev-front end',
  salario: 1000,
  dizCargo: [Function (anonymous)],
  nome: 'Thais',
  dizOi: [Function (anonymous)]
}*/

/* encapsular, tornar a informação imutavel devemos fazer da seguinte forma:*/

function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function () {
        return _salario;
    }

    this.setSalario = function(valor) {
        _salario = valor;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome); 
}

const funcionario1 = new Funcionario("Thais", "dev-front end", 5000);
const pessoa = new Pessoa("Thais");


funcionario1.setSalario(7000);

console.log(funcionario.getSalario())