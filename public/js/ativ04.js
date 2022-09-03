"use strict";
// Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.
class Calculadora {
    constructor() {
        this.history = [];
        this.valorAtual = 0;
    }
    somar(valor) {
        const soma = this.valorAtual + valor;
        this.history.push(`${this.valorAtual} + ${valor} = ${soma}`);
        this.valorAtual = soma;
    }
    subtrair(valor) {
        const subtrair = this.valorAtual - valor;
        this.history.push(`${this.valorAtual} - ${valor} = ${subtrair}`);
        this.valorAtual = subtrair;
    }
    multiplicar(valor) {
        const multiplicar = this.valorAtual * valor;
        this.history.push(`${this.valorAtual} * ${valor} = ${multiplicar}`);
        this.valorAtual = multiplicar;
    }
    dividir(valor) {
        const dividir = this.valorAtual / valor;
        this.history.push(`${this.valorAtual} / ${valor} = ${dividir}`);
        this.valorAtual = dividir;
    }
    historico() {
        console.table(this.history);
    }
}
const calculator = new Calculadora();
console.log("<---- Atividade 04 ----->");
calculator.somar(2);
calculator.subtrair(4);
calculator.multiplicar(6);
calculator.dividir(8);
calculator.historico();
console.log("<---- Atividade 04 ----->");
