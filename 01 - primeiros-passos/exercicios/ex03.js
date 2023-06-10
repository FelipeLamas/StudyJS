/*  

# Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
    - Á vista Débito, recebe 10% de desconto
    - Á vista no Dinheiro ou Pix, recebe 15% de desconto
    - Em duas vezes, preço normal de etiqueta sem juros
    - Acima de duas  vezes, preço normal de etique mais juros de 10% 

*/

let precoEtiqueta = 60
let formaPg = Number(prompt('1- Dinheiro ou Pix, 2- Débito, 3- Parcelado em 2x s/Juros, 4- 10x no cartão de crédito 10% de Juros: '))

if(formaPg === 1){
    document.write(`Compra no dinheiro ou Pix com 15% de desconto R$ ${precoEtiqueta - (precoEtiqueta * 0.15)}`)
} else if(formaPg === 2){
    document.write(`Compra no Débito com 10% de desconto R$ ${precoEtiqueta - (precoEtiqueta * 0.1)}`)
} else if(formaPg === 3){
    document.write(`Compra no cartão em 2x s/Juros R$ ${precoEtiqueta}`)
} else if(formaPg === 4){
    document.write(`Compra no cartão de crédito em 10x R$ ${precoEtiqueta + (precoEtiqueta * 0.1)}`)
} else {
    document.write('Parâmetro Inválido!')
}