// se rodar o codigo todo de uma vez, ele nao funciona pq usei nome das variaveis iguais
// entao rode um por vez, bglh ta com 9 erro slk kkkkkkkk


//1. 1001 – Extremamente Básico

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

A = parseInt(lines.shift());
B =  parseInt(lines.shift());
console.log(`X = ${A + B}`);

//2. 1002 – Área do Círculo

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


R = parseFloat(lines.shift());
let π = 3.14159;
let A = π*R*R;


console.log(`A=${A.toFixed(4)}`);

//3. 1035 – Teste de Seleção 17

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C, D] = lines.shift().trim().split(" ").map((x) => parseInt(x));

 if (B > C && D > A && (C + D) > (A + B) && C >= 0 && D >= 0 && A % 2 === 0){
        console.log("Valores aceitos");
 }else{
        console.log("Valores nao aceitos");
 }

//4. 1044 – Múltiplos

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B] = lines.shift().split(' ').map((x) => parseInt(x));

if(A < B)   [A, B] = [B, A];

console.log((A % B === 0) ? "Sao Multiplos" : "Nao sao Multiplos");

//5. 1046 – Tempo de Jogo

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [hora1, hora2] = lines.shift().split(' ').map((x) => parseInt(x));
let duracao = (hora2 - hora1 + 24) % 24 || 24;
console.log(`O JOGO DUROU ${duracao} HORA(S)`);


//6. 1048 – Aumento de Salário

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let salario = parseFloat(lines.shift());
let percentual = salario <= 400 ? 15 : salario <= 800 ? 12 :
    salario <= 1200 ? 10 : salario <= 2000 ? 7 : 4;
let reajuste = salario * (percentual / 100);
let novoSalario = salario + reajuste;
console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);

//7. 1038 – Lanche

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');      
let [codigo, quantidade] = lines.shift().split(' ').map((x) => parseInt(x));
let total = 0;
switch (codigo) {
    case 1:
        total = quantidade * 4.00;
        break;
    case 2:
        total = quantidade * 4.50;
        break;
    case 3:
        total = quantidade * 5.00;
        break;
    case 4:
        total = quantidade * 2.00;
        break;
    case 5:
        total = quantidade * 1.50;
        break;
}
console.log(`Total: R$ ${total.toFixed(2)}`);

//8. 1050 – DDD

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let ddd = parseInt(lines.shift());
let cidade = "";
switch (ddd) {
    case 61:
        cidade = "Brasilia";
        break;
    case 71:
        cidade = "Salvador";
        break;
    case 11:
        cidade = "Sao Paulo";
        break;
    case 21:
        cidade = "Rio de Janeiro";
        break;
    case 32:
        cidade = "Juiz de Fora";
        break;
    case 19:
        cidade = "Campinas";
        break;
    case 27:
        cidade = "Vitoria";
        break;
    case 31:
        cidade = "Belo Horizonte";
        break;
    default:
        cidade = "DDD nao cadastrado";
}

//9. 1070 – Seis Números Ímpares

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines.shift());
let count = 0;
let result = [];
while (count < 6) {
    if (N % 2 !== 0) {
        result.push(N);
        count++;
    }
    N++;
}
console.log(result.join('\n'));

//10. 1073 – Quadrado de Pares

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines.shift());
for (let i = 2; i <= N; i += 2) {
    console.log(`${i}^2 = ${i * i}`);
}

//11. 1078 – Tabuada

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines.shift());
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${N} = ${i * N}`);
}

//12. 1114 – Senha Fixa

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let senha;
do {
    senha = parseInt(lines.shift());
    if (senha !== 2002) {
        console.log("Senha Invalida");
    }
} while (senha !== 2002);
console.log("Acesso Permitido");

//13. 1115 – Quadrante

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let result = [];
while (true) {  
    let [x, y] = lines.shift().split(' ').map((n) => parseInt(n));
    if (x === 0 || y === 0) break;
    if (x > 0 && y > 0) result.push("primeiro");
    else if (x < 0 && y > 0) result.push("segundo");
    else if (x < 0 && y < 0) result.push("terceiro");
    else result.push("quarto");
}
console.log(result.join('\n'));

//14. 1134 – Tipo de Combustível

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let alcool = 0, gasolina = 0, diesel = 0;
while (true) {
    let tipo = parseInt(lines.shift());
    if (tipo === 1) alcool++;
    else if (tipo === 2) gasolina++;
    else if (tipo === 3) diesel++;
    else if (tipo === 4) break;
}
console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);

//15. 1021 – Notas e Moedas

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let valor = parseFloat(lines.shift());
let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
console.log("NOTAS:");
for (let nota of notas) {
    let count = Math.floor(valor / nota);
    console.log(`${count} nota(s) de R$ ${nota.toFixed(2)}`);
    valor -= count * nota;
}

//16. 1040 – Média 3

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [N1, N2, N3, N4] = lines.shift().split(' ').map((x) => parseFloat(x));
let media = (N1 * 2 + N2 * 3 + N3 *
4 + N4) / 10;
console.log(`Media: ${media.toFixed(1)}`);
if (media >= 7.0) {
    console.log("Aluno aprovado.");
}
else if (media < 5.0) {
    console.log("Aluno reprovado.");
}
else {
    console.log("Aluno em exame.");
    let N5 = parseFloat(lines.shift());
    console.log(`Nota do exame: ${N5.toFixed(1)}`);
    media = (media + N5) / 2;
    if (media >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${media.toFixed(1)}`);
}

//17. 1045 – Tipos de Triângulos

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(' ').map((x) => parseFloat(x));
[A, B, C] = [A, B, C].sort((a, b
) => b - a);
if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
}
else {
    if (A * A === B * B + C * C) {
        console.log("TRIANGULO RETANGULO");
    }
    if (A * A > B * B + C * C) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (A * A < B * B + C * C) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (A === B && B === C) {
        console.log("TRIANGULO EQUILATERO");
    }
    else if (A === B || B === C || A === C) {
        console.log("TRIANGULO ISOSCELES");
    }
}

//18. 1047 – Tempo de Jogo com Minutos

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [h1, m1, h2, m2] = lines.shift().split(' ').map((x) => parseInt(x));
let inicio = h1 * 60 + m1;
let fim = h2 * 60 + m2;
let duracao = (fim - inicio + 1440) % 1440 || 1440;
let duracaoH = Math.floor(duracao / 60);
let duracaoM = duracao % 60;
console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`);

//19. 1101 – Sequência de Números e Soma

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let result = [];
while (true) {
    let [X, Y] = lines.shift().split(' ').map((x) => parseInt(x));
    if (X <= 0 || Y <= 0) break;
    if (X > Y) [X, Y] = [Y, X];
    let sum = 0;
    let sequence = [];
    for (let i = X; i <= Y; i++) {
        sequence.push(i);
        sum += i;
    }
    result.push(`${sequence.join(' ')} Sum=${sum}`);
}
//20. 1160 – Crescimento Populacional

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let T = parseInt(lines.shift());
let results = [];
for (let t = 0; t < T; t++) {
    let [PA, PB, G1, G2] = lines.shift().split(' ').map((x) => parseFloat(x));
    let years = 0;
    while (PA <= PB && years <= 100) {
        PA += Math.floor(PA * (G1 / 100));
        PB += Math.floor(PB * (G2 / 100));
        years++;
    }
    if (years > 100) {
        results.push("Mais de 1 seculo.");
    } else {
        results.push(`${years} anos.`);
    }
}
console.log(results.join('\n'));
console.log(results.join('\n'));

//21. 1828 – Bazinga!

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let T = parseInt(lines.shift());
let results = [];
for (let t = 0; t < T; t++) {
    let [raj, sheldon] = lines.shift().split(' ');
    if (raj === sheldon) {
        results.push("De novo!");
    } else if (
        (raj === "tesoura" && sheldon === "papel") ||
        (raj === "papel" && sheldon === "pedra") ||
        (raj === "pedra" && sheldon === "lagarto") ||
        (raj === "lagarto" && sheldon === "Spock") ||
        (raj === "Spock" && sheldon === "tesoura") ||
        (raj === "tesoura" && sheldon === "lagarto") ||
        (raj === "lagarto" && sheldon === "papel") ||
        (raj === "papel" && sheldon === "Spock") ||
        (raj === "Spock" && sheldon === "pedra") ||
        (raj === "pedra" && sheldon === "tesoura")
    ) {
        results.push("Raj trapaceou!");
    } else {
        results.push("Sheldon venceu!");
    }
}
console.log(results.join('\n'));

//22. 2059 – Ímpar, Par ou Roubo
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let T = parseInt(lines.shift());
let results = [];
for (let t = 0; t < T; t++) {
    let [N, M] = lines.shift().split(' ').map((x) => parseInt(x));
    if (N % 2 === 0 && M % 2 === 0) {
        results.push("PAR");
    } else if (N % 2 !== 0 && M % 2 !== 0) {
        results.push("IMPAR");
    } else {
        results.push("ROUBO");
    }
}
console.log(results.join('\n'));

//23. 2313 – Qual Triângulo
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let [A, B, C] = lines.shift().split(' ').map((x) => parseFloat(x));

if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
}
else {
    if (A * A === B * B + C * C) {
        console.log("TRIANGULO RETANGULO");
    }
    if (A * A > B * B + C * C) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (A * A < B * B + C * C) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (A === B && B === C) {
        console.log("TRIANGULO EQUILATERO");
    }
    else if (A === B || B === C || A === C) {
        console.log("TRIANGULO ISOSCELES");
    }
}

//24. 2670 – Máquina de Café
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines.shift());
let prices = lines.shift().split(' ').map((x) => parseFloat(x));
let total = 0;
for (let price of prices) {
    total += price;
}
let average = total / N;
console.log(average.toFixed(12));