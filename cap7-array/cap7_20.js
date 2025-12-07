// Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira pessoa com idade maior que 18.

let pessoas = [
    {nome: "gael", idade: 10},
    {nome: "enzo", idade: 8},
    {nome: "josivaldo", idade: 60},
    {nome: "pedro", idade: 20},
    {nome: "josé", idade: 34},
    {nome: "Jesus", idade: 2025},
    {nome: "matheus", idade: 23}
]

console.log(pessoas.find(pessoa => pessoa.idade >= 18))