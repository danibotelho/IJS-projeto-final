const Instituicao = require("../Instituicao/Instituicao");
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

  doarDinheiro(instituicao, valor) {
    if (!(instituicao instanceof Instituicao)) {
        console.log('A Intuição Informada não existe.');
        return;
    }
    if (valor > 0) {
        instituicao.doacoes.dinheiro += valor;
        this.doacoes.dinheiro += valor;
      console.log(
        `${this.nomeCompleto} doou R$ ${valor.toFixed(2)} para o ${instituicao.nome}.`
      );
    } else {
      console.error("O valor da doação em dinheiro deve ser maior que zero.");
    }
  }

  doarRacao(instituicao, quantidade) {
    if (!(instituicao instanceof Instituicao)) {
        console.log('A Intuição Informada não existe.');
        return;
    }
    if (quantidade > 0) {
      instituicao.doacoes.racao += quantidade;
      this.doacoes.racao += quantidade;
      console.log(
        `${this.nomeCompleto} doou ${quantidade} kg de ração para para o ${instituicao.nome}.`
      );
    } else {
      console.error("A quantidade de ração doada deve ser maior que zero.");
    }
  }

  doarMedicamento(instituicao, medicamento) {
    this.doacoes.medicamentos.push(medicamento);
    instituicao.doacoes.medicamentos.push(medicamento);
    console.log(
      `${this.nomeCompleto} doou o medicamento ${medicamento} para o ${instituicao.nome}.`
    );
  }
}

module.exports = Doador;