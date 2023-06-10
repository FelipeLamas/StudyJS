// Calculando média utilizando laços de repetição

/* 

// Solução do curso.

let notas = [5, 7, 8, 5, 8];

let soma = 0;

for (let i = 0; i < notas.length; i++) { 
    const nota = notas[i];
    soma = soma + nota;
}

let media = soma / notas.length;
console.log(media.toFixed(2)); 


*/

// Minha solução

// Usando interação com usuário básico:

let notas = [];

let soma = 0;

for (let i = 0; i < 3; i++) {
    notas.push(Number(prompt('Informe as três notas do aluno: ')));
    const nota = notas[i]
    soma = soma + nota;
}

let media = soma / notas.length;
alert(media.toFixed(2));