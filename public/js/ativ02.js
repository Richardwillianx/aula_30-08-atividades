"use strict";
// // Crie uma Classe que modele uma bola:
// //a. Atributos
// I. Cor
// II. Circuferência
// III. Mateial
// b. Métodos
// I. Trocar a cor
// II. Mostrar a cor
class Ball {
    constructor(corInc, circuferenciaInc, materialInc) {
        this.cor = corInc;
        this.circuferencia = circuferenciaInc;
        this.material = materialInc;
    }
    changeColor(newColor) {
        this.cor = newColor;
        console.log(`A nova cor da bola é:  ${this.cor}.`);
    }
    showColor() {
        return this.cor;
    }
}
const ball = new Ball("White", 50, "porcelain");
console.log("<---- Atividade 02 ----->");
ball.changeColor("Green");
ball.changeColor("Purple");
console.log("<---- Atividade 02 ----->");
