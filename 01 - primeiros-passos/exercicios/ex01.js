/*  

# Faça um programa que dado três notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua classificação
conforme a tabela abaixo:

Classificação:

    - Média menor que 5, reprovado
    - Média entre 5 e 7, recuperação
    - Média de 7 para cima, passou de semestre

    // Solução do Curso

    const nota1 = 7
    const nota2 = 8
    const nota3 = 8

    const media = (nota1+nota2+nota3)/3
    if(media < 5){
        console.log('reprovado')
    } else if(media >= 5 && media < 7){
        console.log('recuperação')
    } else if(media >= 7){
        console.log('aprovado')
    } else{
        console.log('Valor inválido!')
    }
*/

// Minha Solução:

let n1 = Number(prompt('Informe a primeira nota do aluno: '))
let n2 = Number(prompt('Informe a segunda nota do aluno: '))
let n3 = Number(prompt('Informe a terceira nota do aluno: '))

let media = (n1+n2+n3)/3

if(media < 5){
    document.write(`Aluno reprovado com média: ${media.toFixed(2)}`)
} else if(media > 5 && media < 7){
    document.write(`Aluno em recuperação com média: ${media.toFixed(2)}`)
} else if(media >= 7){
    document.write(`Aluno aprovado com média: ${media.toFixed(2)}`)
} else {
    document.write('Valor Inválido!')
}



