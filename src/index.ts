interface IContador {
  valor: number;
  zerarValor(): void;
  incrementarValor(valor: number): void;
  retornarValor(): number;
}

class Contador implements IContador {
  valor: number;

  constructor() {
    this.valor = 0;
  }

  zerarValor(): void {
    this.valor = 0;
    console.log(`O valor do contador após zerar é de: ` + this.valor);
  }

  incrementarValor(valorIncrementado: number): void {
    this.valor += valorIncrementado;
    console.log(
      `O valor do contador ${valorIncrementado} após incrementado  é  ${this.valor}`
    );
  }

  retornarValor(): number {
    return this.valor;
  }
}

const meuContador = new Contador();

console.log("<-----> Atividades <------>");

console.log(meuContador.valor);

meuContador.incrementarValor(10);
meuContador.incrementarValor(-20);
meuContador.zerarValor();
meuContador.incrementarValor(80);
console.log(meuContador.valor);

console.log(meuContador.retornarValor);

meuContador;
console.log("<-----> Fim das Atividades <------>");
