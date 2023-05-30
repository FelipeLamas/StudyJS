function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso';
    } else if(imc >= 18.5 && imc < 25){
        return 'Peso normal';
    } else if(imc >= 25 && imc < 30){
        return 'Acima do Peso';
    } else if(imc >= 30 && imc < 40){
        return 'Obeso';
    } else {
        return 'Operação Inválida!'
    }
}

(function main(){
    let peso = Number(prompt('Informe seu peso atual: '));
    let altura = Number(prompt('Informe sua altura atual: '));
    let imc = calcularImc(peso, altura);

    alert(`Seu IMC é ${imc.toFixed(2)} e você está ${classificarImc(imc)}`)
})();

