// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número encontrado informando se ele é par ou impar.


// Minha solução.

let num = [1, 4, 5, 6, 7, 8, 10];

for (let i = 0; i < num.length; i++) {
    const numero = num[i];
    if(numero % 2 === 0){
        console.log(`O número ${numero} é Par`);
    } else {
        console.log(`O número ${numero} é Impar`);
    }
}