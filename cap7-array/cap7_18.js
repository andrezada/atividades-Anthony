// Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.
let carros = [
    {ano: 2012, fabricante: "Toyota", modelo: "Corolla"},
    {ano: 2009, fabricante: "Volkswagen", modelo: "beetle"},
    {ano: 2015, fabricante: "Honda", modelo: "Accord"},
    {ano: 200, fabricante: "Renault", modelo: "Kwid"},
    {ano: 2010, fabricante: "Volkswagen", modelo: "Gol"}
];

carrosBons = carros.filter(carro => carro.ano >= 2010)
console.log(carrosBons)

