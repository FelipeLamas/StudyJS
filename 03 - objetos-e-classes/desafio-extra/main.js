class Funcionario{
    salarioBruto;
    addBeneficios;

    constructor(salarioBruto, addBeneficios, desconto, valor){
        this.salarioBruto = salarioBruto
        this.addBeneficios = addBeneficios
    }

    soma(valor){
        valor = this.salarioBruto + this.addBeneficios;
        return valor;
    }

    aplicarDesconto(desconto){
        return (this.soma() - (this.soma() * (desconto / 100)));
    }

    classficarDesconto(){
        if(this.salarioBruto >= 0 && this.salarioBruto <= 1100.00){
            return this.aplicarDesconto(5);
        } else if(this.salarioBruto > 1100.01 && this.salarioBruto <= 2499.99){
            return this.aplicarDesconto(10);
        } else if(this.salarioBruto >= 2500.00){
            return this.aplicarDesconto(15);
        }
    }
}

felipe = new Funcionario(2500.00, 622.00);
console.log(felipe.classficarDesconto());