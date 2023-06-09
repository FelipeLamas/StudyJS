// Calculando média utilizando laços de repetição

let notas = [5, 7, 8, 5, 8];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

let media = soma / notas.length;
console.log(media.toFixed(2));