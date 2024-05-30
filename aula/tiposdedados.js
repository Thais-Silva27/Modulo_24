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

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);

/* essa mensagem aparecerá no terminal:
PS C:\Users\thays\OneDrive\Área de Trabalho\curso programação\frontend\modulo 24\aula> node .\tiposdedados.js
string
number
boolean
object
PS C:\Users\thays\OneDrive\Área de Trabalho\curso programação\frontend\modulo 24\aula>
*/

console.log(nome instanceof Array)

 /*retornara como true ou false*/