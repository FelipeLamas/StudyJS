class pessoa {
    nome;
    idade;

    constructor(nome, idade, peso, altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.imc = peso / Math.pow(altura, 2);
        this.anoDeNascimento = 2023 - idade;
    }
    descrever () {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade, nascido em ${this.anoDeNascimento}, meu imc atual è ${this.imc.toFixed(2)}`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if(p2.nome > p1.nome){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`)
    }
}

const felipe = new pessoa('Felipe Lamas', 29, 85, 1.62);
const gabriela = new pessoa('Gabriela Bastos', 28, 65, 1.65);

compararPessoas(felipe, gabriela);

function calcImcPessoa(pessoa){
    if(pessoa.imc < 18.5){
        console.log(`${pessoa.nome}, tem ${pessoa.idade} anos de idade, seu IMC é: ${pessoa.imc.toFixed(2)} está abaixo do peso ideal!`);
    } else if(pessoa.imc > 18.5 && pessoa.imc <= 25){
        console.log(`${pessoa.nome}, tem ${pessoa.idade} anos de idade, seu IMC é: ${pessoa.imc.toFixed(2)} está com o peso normal!`);
    } else if(pessoa.imc > 25 && pessoa.imc <= 30){
        console.log(`${pessoa.nome}, tem ${pessoa.idade} anos de idade, seu IMC é: ${pessoa.imc.toFixed(2)} está acima do peso ideal!`);
    } else if(pessoa.imc > 30 && pessoa.imc <= 40){
        console.log(`${pessoa.nome}, tem ${pessoa.idade} anos de idade, seu IMC é: ${pessoa.imc.toFixed(2)} está obeso!`);
    } else if(pessoa.imc > 40){
        console.log(`${pessoa.nome}, tem ${pessoa.idade} anos de idade, seu IMC é: ${pessoa.imc.toFixed(2)} está com obesidade grave!`)
    }
}

calcImcPessoa(felipe)
calcImcPessoa(gabriela)