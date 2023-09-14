class Pessoa {
  #idade;
  #cpf;
  #telefone;

  constructor(nomeCompleto, cpf, idade, telefone, email) {
    this.nomeCompleto = nomeCompleto;
    this.#cpf = cpf;
    this.idade = idade;
    this.telefone = telefone;
    this.email = email;
  }

  get idade() {
    return this.#idade;
  }

  set idade(novaIdade) {
    this.#idade = novaIdade;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(novoCpf) {
    this.#cpf = novoCpf;
  }

  get telefone() {
    return this.#telefone;
  }

  set telefone(novoTelefone) {
    this.#telefone = novoTelefone;
  }
}
module.exports = Pessoa;
