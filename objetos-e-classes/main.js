/* 

# Classes e Objetos:

Um objeto é uma coleção dinâmica de chave e valor:
    - Em JavaScript podemos atribuiruma função para um objeto, chamamos isso de (método).
    - Uma vez que declaramos um objeto literal podemos também modificar ele dinamicamente, seja para adicionar valor ou remover.

    O código a seguir trará um exemplo de todos os conceitos estudados até agora.

*/



const pessoa = {
    nome: prompt('Informe seu nome: '),
    idade: Number(prompt('Informe sua idade: ')),
    descrever: function(){
        alert(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa.descrever();