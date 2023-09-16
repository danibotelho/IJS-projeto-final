

class Animal {
  constructor(nome, especie, idade, descricao) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
    this.descricao = descricao;
    this.estaAdotado = false;
    this.tutor = "Sem Tutor";
  }

  descrever() {
    return `${this.nome} (${this.especie}, ${this.idade} anos): ${this.descricao}`;
  }
}

module.exports = Animal;
