/*  
    # Faça um programa que calcule e imprima o salário a ser transferido para um funcionário
    # Para realizar o calculo receba o valor bruto do salário e o adicional dos beneficios
    # O salário a ser transferido é calculado da seguinte maneira:

    // O valor bruto - percentual de imposto mediante a faixa salarial + adicional dos beneficios

    // Para calcular o percentual de imposto segue as aliquotas:

        - De R$ 0.00 a R$ 1100.00 = 5%
        - De R$ 1100.01 a R$ 2500.00 = 10%
        Maior que 2500.00 = 15%

        Exemplo:
            - Entrada:
                2000
                250
            - Saida:
                2050.00
*/

const {gets, print} = require('./funcoes-auxiliares');

const salarioBruto = gets();
const addBeneficios = gets();

function porcentagem(desconto){
    return (salarioBruto - (salarioBruto * (desconto / 100)));
}

function salarioComDesImpostoAliquotaBaseSalarial(){
    if(salarioBruto >= 0 && salarioBruto <= 1100){
        return porcentagem(5);
    } else if(salarioBruto > 1100 && salarioBruto <= 2500){
        return porcentagem(10);
    } else if(salarioBruto > 2500){
        return porcentagem(15);
    }
}

function salarioPg(){
    return salarioComDesImpostoAliquotaBaseSalarial() + addBeneficios;
}

const salarioLiquido = salarioComDesImpostoAliquotaBaseSalarial();
const salarioComBenefio = salarioPg();

print(`Salário Liquido: ${salarioLiquido}`);
print(`Salário + Beneficios: ${salarioComBenefio}`);