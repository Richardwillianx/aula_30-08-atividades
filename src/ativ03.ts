// 3. Crie uma classe para implementar uma conta corrente. A classe

// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo

// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque

// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

class ContaCorrente {
  numeroConta!: number;
  nomeCorrentista!: string;
  saldo!: number;

  construtor(
    numeroContaInc: number,
    nomeCorrentistaInc: string,
    saldoInc?: number
  ) {
    this.numeroConta = numeroContaInc;
    this.nomeCorrentista = nomeCorrentistaInc;
    this.saldo = saldoInc === undefined ? 0 : saldoInc;
  }
  alteraNome(novoNome: string) {
    this.nomeCorrentista = novoNome;
    console.log(
      `o nome do correntista foi alterado para ${this.nomeCorrentista}`
    );
  }

  deposito(novoDeposito: number) {
    this.saldo += novoDeposito;
    console.log(`Saldo após depósito: R${this.saldo}`);
  }

  saque(novoSaque: number) {
    if (this.saldo - novoSaque > 0) {
      console.log(`Seu saldo é ${this.saldo}, seu saldo não pode ser negativo`);
    } else {
      this.saldo -= novoSaque;
      console.log(
        `Seu saldo após o saque de R$${novoSaque} é de R${this.saldo}`
      );
    }
  }
}

const conta = new ContaCorrente();

console.log("<---- Atividade 03 ----->");

conta.alteraNome("William");
conta.deposito(500);
conta.saque(100);

console.log("<---- Atividade 03 ----->");
