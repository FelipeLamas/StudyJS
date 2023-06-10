/*  

Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / Math.pow(altura, 2));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer o valor do seu IMC.

*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (Math.pow(this.altura, 2));
    }
    classificarImc(){
        let imc = this.calcularImc();
        if(imc < 18.5){
            return `${this.nome} está abaixo do peso!`;
        } else if(imc > 18.5 && imc <= 25){
            return `${this.nome} está com peso normal!`;
        } else if(imc > 25 && imc <= 30){
            return `${this.nome} está acima do peso!`;
        } else if(imc > 30 && imc <= 40){
            return `${this.nome} está obeso(a)!`;
        } else if(imc > 40){
            return `${this.nome} está com obesidade grave!`;
        }
    }
}

felipe = new Pessoa('Felipe Lamas', 85, 1.62);
console.log(felipe.calcularImc());
console.log(felipe.classificarImc());