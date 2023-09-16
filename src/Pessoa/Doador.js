

const Abrigo = require("../Abrigo/Abrigo");
const Pessoa = require("./Pessoa");

class Doador extends Pessoa {
  constructor(nomeCompleto, cpf, idade, telefone, email) {
    super(nomeCompleto, cpf, idade, telefone, email);
    this.doacoes = {
      dinheiro: 0,
      racao: 0,
      medicamentos: [],
    };
  }

  doarDinheiro(abrigo, valor) {
    if (!(abrigo instanceof Abrigo)) {
      return "A Intuição Informada não existe.";
    }

    if (valor > 0) {
      abrigo.doacoes.dinheiro += valor;
      this.doacoes.dinheiro += valor;
      console.log(
        `${this.nomeCompleto} doou R$ ${valor.toFixed(2)} para o ${
          abrigo.nome
        }.`
      );
    } else {
      return "O valor da doação em dinheiro deve ser maior que zero.";
    }
  }

  doarRacao(abrigo, quantidade) {
    if (!(abrigo instanceof Abrigo)) {
      return "A Intuição Informada não existe.";
    }
    if (quantidade > 0) {
      abrigo.doacoes.racao += quantidade;
      this.doacoes.racao += quantidade;
      console.log(
        `${this.nomeCompleto} doou ${quantidade} kg de ração para para o ${abrigo.nome}.`
      );
    } else {
      return "A quantidade de ração doada deve ser maior que zero.";
    }
  }

  doarMedicamento(abrigo, medicamento) {
    if (!(abrigo instanceof Abrigo)) {
      return "A Intuição Informada não existe.";
    }
    this.doacoes.medicamentos.push(medicamento);
    abrigo.doacoes.medicamentos.push(medicamento);
    console.log(
      `${this.nomeCompleto} doou o medicamento ${medicamento} para o ${abrigo.nome}.`
    );
  }
}

module.exports = Doador;
