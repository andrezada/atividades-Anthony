const prompt = require('prompt-sync')();
// 13°)
let filmes = [];
for(let i = 1; i <= 5; i++){
    let nome = prompt(`Digite o nome de 5 filmes. Filme n°${i}: `);
    filmes.push(nome);
}
console.log(filmes);

//14°)
for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i]);
}

//15°)
console.log("loop for of -----------")
for(let item of filmes){
    console.log(item);
}
