/*  

// Manipulando funções

*/

function writeMyName(){
    myName = prompt('Informe seu nome: ');
    return myName;
}

writeMyName();
nome = myName;

function maiorIdade(anoNasc, anoAtual){
    anoNasc = Number(prompt('Informe o ano de nascimento: '));
    anoAtual = Number(prompt('Informe nosso ano atual: '));
    let idade = anoAtual - anoNasc;

    if(idade >= 18){
        alert(`Meu nome é ${nome}, tenho ${idade} anos e sou maior de idade!`)
    } else{
        alert(`Meu nome é ${nome}, tenho ${idade} anos e sou menor de idade!`)
    }
}

maiorIdade();
