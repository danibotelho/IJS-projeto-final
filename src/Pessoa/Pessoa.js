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
    if (novaIdade >= 0) {
      this.#idade = novaIdade;
    } else {
      console.error("A idade não pode ser negativa.");
    }
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
