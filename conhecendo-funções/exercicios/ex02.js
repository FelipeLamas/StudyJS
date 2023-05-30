/*  

// Crie um programa que calcule o valor de desconto e juros de acordo com a forma de pagamento escolhida!


*/

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

function main(){
    let precoEtiqueta = 100;
    let formaPg = Number(prompt('Formas de pagamento: 1- Débito, 2- 2x s/Juros, 3- Pacelamento em até 10x com juros de 10%, 4- Dinheiro ou Pix: '));

    if(formaPg === 1){
        alert(`Compra no débito com 10% de desconto R$: ${aplicarDesconto(precoEtiqueta, 10)}`);
    } else if(formaPg === 2){
        alert(`Compra no cartão em 2x s/Juros R$: ${precoEtiqueta}`);
    } else if(formaPg === 3){
        alert(`Compra no cartão de crédito em até 10x com 10% de Juros R$: ${aplicarJuros(precoEtiqueta, 10)}`);
    } else if(formaPg === 4){
        alert(`Compre no dinheiro ou pix com 15% de desconto R$: ${aplicarDesconto(precoEtiqueta, 15)}`);
    } else {
        alert(`Parâmetro Inválido!`);
    }
}

main();