const nome = "thais"
const idade = 38
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,

}

console.log(pessoa.nome) /*jeito 1*/
console.log(pessoa['nome']);/*jeito 2*/

function exibeAtributo(nomeAtributo) { /*jeito 3*/
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');
/*comando node e nome do arquivo ex: node .\acessaratributo.js */

/*pode ser usado o "in"*/

if ('nome' in pessoa) {
    console.log('tem nome');
}

/*para que o constante não seja modificado ex*/

Object.keys (pessoa)
Object.freeze (pessoa)

