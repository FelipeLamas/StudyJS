/* 

# Classes e Objetos:

Um objeto é uma coleção dinâmica de chave e valor:
    - Em JavaScript podemos atribuiruma função para um objeto, chamamos isso de (método).
    - Uma vez que declaramos um objeto literal podemos também modificar ele dinamicamente, seja para adicionar valor ou remover.

    O código a seguir trará um exemplo de todos os conceitos estudados até agora.

*/



/* const ind = {
    nome: prompt('Informe seu nome: '),
    idade: Number(prompt('Informe sua idade: ')),
    descrever: function(){
        alert(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa.descrever(); */

// Classe é a definição do que deve ser o objeto
// Instância é a ocorrência do objeto.
// Uma classe define um modelo para determinado grupo de objetos semelhantes. Exemplo:
// A classe pessoas, pode descrever diversas pessoas quu possuem os mesmo atributos comoo:
// Nome, Idade, CPF, RG, Endereço entre outros.
// O exemplo abaixo descreve a classe pessoa que instância os objetos vitor e renan.

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

const felipe = new pessoa('Felipe Lamas', 29, 85, 1.70);
felipe.descrever();
console.log(felipe)