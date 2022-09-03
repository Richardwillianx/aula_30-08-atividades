"use strict";
// // Faça um programa completo utilizando classes e métodos que:
// // a. Possua uma classe chamada BombaCombustivel, com no
// // mínimo esses atributos:
// // i. tipoCombustivel.
// // ii. valorLitro
// // iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.
// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.
class BombaCombustivel {
    constructor(tipo, valor, quantidade) {
        this.tipoCombustivel = tipo;
        this.valorLitro = valor;
        this.quantidadeCombustivel = quantidade;
    }
    abastecerPorValor(valor) {
        const litrosCombustivel = valor / this.valorLitro;
        if (this.quantidadeCombustivel >= litrosCombustivel) {
            this.quantidadeCombustivel =
                this.quantidadeCombustivel - litrosCombustivel;
            console.log(`com R$${valor} você abasteceu ${litrosCombustivel}L e restam ${this.quantidadeCombustivel}L na bomba`);
            return;
        }
        console.log("Acabou o combustível.");
    }
    abastecerPorLitro(litros) {
        if (this.quantidadeCombustivel >= litros) {
            const valorFinal = litros * this.valorLitro;
            this.quantidadeCombustivel = this.quantidadeCombustivel - litros;
            console.log(`Você abasteceu ${litros} e deverá pagarR$${valorFinal} e restam ${this.quantidadeCombustivel}L na bomba`);
            return;
        }
        console.log("Acabou combustível");
    }
    alterarValor(valor) {
        this.valorLitro = valor;
    }
    alterarCombustivel(combustível) {
        this.tipoCombustivel = combustível;
    }
    alterarQuantidadeCombustivel(quantidadeTotal) {
        this.quantidadeCombustivel = quantidadeTotal;
    }
}
const posto = new BombaCombustivel("A", 50, 1000);
console.log("<---- Atividade 05 ----->");
posto.abastecerPorValor(100);
posto.alterarValor(200);
posto.alterarQuantidadeCombustivel(2000);
posto.abastecerPorLitro(100);
console.log("<---- Atividade 05 ----->");
