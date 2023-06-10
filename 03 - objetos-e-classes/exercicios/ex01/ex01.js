/* 

1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor, e um gasto médio de combustivél por kilometros rodados.
Crie um método que dado a quantidade de quilometros e o preço do combustivél nos dê o valor gasto em reais para realizar este percurso


*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }
    
    calcularViagem(distanciaKm,precoCombustivel){
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

logan = new Carro('Honda', 'Azul', 1/12);
palio = new Carro('Fiat', 'Preto', 1/10);

console.log(logan.calcularViagem(70, 5.79));
console.log(palio.calcularViagem(70, 5.79));