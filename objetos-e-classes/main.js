const pessoa = {
    nome: prompt('Informe seu nome: '),
    idade: Number(prompt('Informe sua idade: ')),
    descrever: function(){
        alert(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa.descrever();