/*

Estruturas Condicionais Simples - JS

# Nos ajudam a direcionar o código para sua correta execução, definindo os caminhos possíveis a se seguir.
# Podemos então definir condições, para que determinado bloco de código seja executado conforme sua necessidade.

//Par ou Impar

const numero = Number(prompt('Informe um valor para verificar se é par ou impar: '))
const eNumPar = numero % 2 === 0

if(eNumPar){
    alert('Par')
} else {
    alert('Impar')
}

//Divisivel por 5

const num = Number(prompt('informe um valor para verificar se é divisivel por 5: '))
const isNumPor5 = (num % 5) === 0

if(isNumPor5){
    alert('Sim')
} else {
    alert('Não')
}

*/

// Divisivel por 5 usando else if

const num = Number(prompt('Informe um valor para verificar se é divisivel por 5: '))
const isNumPor5 = (num % 5) === 0

if(num === 0){
    alert('O número informado é inválido')
} else if(isNumPor5){
    alert('Sim')
} else {
    alert('Não')
}



