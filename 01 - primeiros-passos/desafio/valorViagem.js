/*  

# Fça um programa que calcule o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

1- Preço do etanol
2- Preço da gasolina
3- Tipo de combustivel que será utilizado
4- Gasto médio de combustivel do carro por KM
5- Distância em KM da viagem

*/

const precoGaso = 4.89
const precoEtanol = 3.87
let kmPorLitro = Number(prompt('Informe quantos KM por litro o seu carro faz: '))
let distanciaKm = Number(prompt('Informe a distância da viagem em KM: '))

const gastoViagem = distanciaKm / kmPorLitro

let tipoCombustivel = prompt('Informe o tipo de combustivel: ')

if(tipoCombustivel == 'Etanol'){
    tipoCombustivel = precoEtanol
    let valorFinal = tipoCombustivel * gastoViagem
    document.write(`O valor gasto em sua viagem foi de: ${valorFinal.toFixed(2)}!`)
} else if(tipoCombustivel == 'Gasolina'){
    tipoCombustivel = precoGaso
    let valorFinal = tipoCombustivel * gastoViagem
    document.write(`O valor gasto em sua viagem foi de: ${valorFinal.toFixed(2)}!`)
}