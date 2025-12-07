/*
1. Liste as funções predefinidas em JavaScript que você conhece e categorize-as por funcionalidade
(por exemplo, entrada e saída de dados, manipulação de strings, etc.).

Manipular dados: parseInt() e parseFloat() convertem strings em números
inteiros e decimais, respectivamente
Entrada e saida de dados: console.log() e prompt() permitem interagir com o
usuário, imprimindo mensagens e coletando informações, respectivamente
*/
/*
2. Explore outras funções predefinidas em JavaScript lendo a documentação oficial e
experimentando-as em seu próprio código.

alert()`: Exibe uma mensagem de alerta num pop-up para o utilizador. 
confirm()`: Apresenta uma caixa de diálogo com opções "OK" e "Cancelar" para o utilizador confirmar uma ação. 
prompt()`: Permite ao utilizador inserir um texto através de uma caixa de diálogo, retornando o valor digitado.
*/ 
//3. Crie um código JavaScript que utilize pelo menos três funções predefinidas diferentes para
//realizar uma tarefa específica (por exemplo, calcular a média de três números).
var media1 = parseFloat(prompt("Digite o primeiro número:"));
var media2 = parseFloat(prompt("Digite o segundo número:"));
var media3 = parseFloat(prompt("Digite o terceiro número:"));
var media = (media1 + media2 + media3) / 3;
console.log("A média dos três números é: " + media.toFixed(2));


//4. Escreva uma função simples que exiba uma mensagem na tela e chame-a para ver o resultado.
alert("Olá! Esta é uma mensagem exibida por uma função simples")
//5. Crie uma função que receba três números como parâmetros, calcula a média deles e exiba o
//resultado.
function calcularMedia(num1, num2, num3) {
    var media = (num1 + num2 + num3) / 3;
}
console.log(console.log(calcularMedia(5, 10, 15)))

//6. Escreva uma função que receba um número como parâmetro e retorne o quadrado desse
//número.
function quadrado(num) {
    return num * num;
}
// 7. Declare uma variável global e uma variável local dentro de uma função. Tente acessá-las de
//diferentes partes do código para entender o escopo.
var Global = "Eu sou uma variável global";
function local() {
    var variavelLocal = "uma variável local";
    console.log(variavelLocal)
}
console.log(Global);
console.log(local())

//8. Crie uma função que declara uma variável dentro de um bloco de código (por exemplo, um if)
//e tente acessá-la fora desse bloco para entender o escopo local do bloco.
function bloco() {
    if (true) {
        var variavelBloco = "uma variável de bloco";
        console.log(variavelBloco);
    }else{
        console.log("não é possivel acessar a variavel de bloco aqui")
    }
}
console.log(variavelBloco)

//9. Reescreva todas as funções anteriores usando à estrutura de arrow function.
const calcularMediaArrow = (num1, num2, num3) => (num1 + num2 + num3) / 3;
const quadradoArrow = num => num * num;

//10. Usando funções, crie um programa que solicita dois números ao usuário, calcula sua média e
//exibe o resultado.
    function calcularMediaUsuario() { 
          var media = (num1 + num2) / 2;
}
    var num1 = parseInt(prompt("Digite o primeiro número:"));
    var num2 = parseInt(prompt("Digite o segundo número:"));
 console.log(calcularMediaUsuario(num1, num2))

//11. Crie uma calculadora que faça a adição, subtração, multiplicação ou divisão de dois números.
//Use funções separadas para cada operação e para exibir o resultado
function multiplicação() {
    return a * b
}
function soma() {
    return a + b
}
function subtraçâo() {
    return a - b
}
function divisão() {
    return a / b
}
let a = parseInt(prompt("numero 1:"));
let b = parseInt(prompt("numero 2:"));
let resposta = prompt("digite qual operação voce deseja:")

switch (resposta) {
    case "soma", "+":
        console.log(soma(a, b));
        break;
    case "subtraçao", "-":
        console.log(subtraçâo(a, b));
        break;
    case "multiplicacao", "*":
        console.log(multiplicação(a, b));
        break;
    case "divisao", "/":
        console.log(divisão(a, b));
        break;
    default:
        console.log("digite o nome da operaçao corretamente")
        break;
}
//12. Desenvolva um conversor de moeda que solicita ao usuário o valor em Real e o converte para
//Dólar. Use funções para ler os dados de entrada, realizar a conversão e exibir o resultado.
function conversorMoeda(real) {
    return real * 0.18;
}
let real = parseFloat(prompt("Digite o valor em Real:"));
console.log("O valor em Dólar é: " + conversorMoeda(real).toFixed(0) + " USD")

//13. Usando funções, escreva um programa que solicita ao usuário sua altura e peso e calcula o IMC.
//Em seguida, exibe o resultado e uma mensagem indicando se a pessoa está abaixo do peso, no
//peso normal, com sobrepeso ou obesa.
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));
let imc = calcularIMC(peso, altura);
if (imc < 18.5) {
    console.log("Seu IMC é " + imc.toFixed(2) + ", você está abaixo do peso.");
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ", você está no peso normal.");
}
else if (imc >= 25 && imc < 29.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ", você está com sobrepeso.");
}
else {
    console.log("Seu IMC é " + imc.toFixed(2) + ", você está obeso.");
}
/*
14. Implemente um jogo de adivinhação onde o computador gera um número aleatório entre 1 e 100
e o jogador deve adivinhar qual é o número. O jogo possui as seguintes regras e funcionalidades:
• O jogador inicia com uma pontuação de 100 pontos.
• Cada tentativa incorreta reduz 1 ponto da pontuação do jogador.
• O jogo não possui limite de tentativas, continuando até que o jogador adivinhe corretamente o
número secreto.
Quando o jogador acertar, o programa deve:
• Exibir uma mensagem informando que o jogador acertou.
• Informar a pontuação atual do jogador.
Além disso, para auxiliar o jogador:
• Após cada tentativa incorreta, o jogo deve exibir uma dica informando se o número secreto é
menor ou maior do que o palpite do jogador.
*/
function jogoAdivinhacao() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let pontuacao = 100;
    let acertou = false;

    while (!acertou && pontuacao > 0) {
        let palpite = parseInt(prompt("Digite um número entre 1 e 100:"));

        if (palpite === numeroSecreto) {
            acertou = true;
            console.log("Parabéns! Você acertou o número secreto.");
            console.log("Sua pontuação final é: " + pontuacao + " pontos.");
        } else {
            pontuacao--;
            if (palpite < numeroSecreto) {
                console.log("O número secreto é maior do que " + palpite + ".");
            } else {
                console.log("O número secreto é menor do que " + palpite + ".");
            }
            console.log("Tente novamente! Sua pontuação atual é: " + pontuacao + " pontos.");
        }
    }

    if (pontuacao === 0) {
        console.log("Você perdeu! O número secreto era: " + numeroSecreto);
    }
}   
jogoAdivinhacao();
