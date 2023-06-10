/*  

# Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição física de acordo com a tabela:

IMC em adultos Condições

    - Abaixo de 18.5 Abixo do peso
    - Entre 18.5 e 25 Peso Normal
    - Entre 25 e 30 Acima do peso
    - Entre 30 e 40 Obeso
    -Acima de 40 Obesidade Grave



*/
// Minha Solução

let peso = Number(prompt('Informe seu peso atual: '))
let altura = Number(prompt('Informe sua altura atual: '))

imc = peso / Math.pow(altura, 2)

if(imc < 18.5){
    document.write(`Seu IMC: ${imc.toFixed(2)} e você está abaixo do peso`)
} else if(imc > 18.5 && imc < 25){
    document.write(`Seu IMC: ${imc.toFixed(2)} e você está com o peso normal`)
} else if(imc > 25 && imc <= 30){
    document.write(`Seu IMC: ${imc.toFixed(2)} e você está acima do peso`)
} else if(imc > 30 && imc <= 40){
    document.write(`Seu IMC: ${imc.toFixed(2)} e você está obeso`)
} else if(imc > 40){
    document.write(`Seu IMC: ${imc.toFixed(2)} e você está com obesidade grave`)
}