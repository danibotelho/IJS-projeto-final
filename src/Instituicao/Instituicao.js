class Instituicao {
  constructor(nome, endereco, descricao) {
    this.nome = nome;
    this.endereco = endereco;
    this.descricao = descricao;
    this.animaisDisponiveisParaAdocao = [];
    this.animaisAdotados = [];
    this.doacoes = {
      dinheiro: 0,
      racao: 0,
      medicamentos: [],
    };
  }

  adicionarAnimalAoAbrigo(animal) {
    this.animaisDisponiveisParaAdocao.push(animal);
  }

  listarAnimaisDisponiveis() {
    const listaAnimaisDisponiveisParaAdocao =
      this.animaisDisponiveisParaAdocao.map((animal) => ({
        nome: animal.nome,
        especie: animal.especie,
      }));
    return listaAnimaisDisponiveisParaAdocao;
  }

  listarAnimaisAdotados() {
    const listaAnimaisAdotados = this.animaisAdotados.map((animal) => ({
      nome: animal.nome,
      especie: animal.especie,
    }));
    return listaAnimaisAdotados;
  }

  listarDoacoes() {
    const listaDoacoes = [];
    const dinheiroFormatado = this.doacoes.dinheiro.toFixed(2);
    listaDoacoes.push({ tipo: "dinheiro", valor: dinheiroFormatado });
    listaDoacoes.push({
      tipo: "racao",
      quantidade: `${this.doacoes.racao} kg`,
    });
    const medicamentos = this.doacoes.medicamentos;
    if (medicamentos.length > 0) {
      listaDoacoes.push({
        tipo: "medicamentos",
        quantidade: medicamentos.length,
        listaMedicamentos: medicamentos,
      });
    } else {
      listaDoacoes.push({
        tipo: "medicamentos",
        quantidade: medicamentos.length,
        listaMedicamentos: medicamentos,
      });
    }
    return listaDoacoes;
  }
}
module.exports = Instituicao;
