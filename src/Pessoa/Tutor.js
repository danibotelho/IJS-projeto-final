const Instituicao = require("../Instituicao/Instituicao");
const Pessoa = require("./Pessoa");

class Tutor extends Pessoa {
  constructor(nomeCompleto, cpf, idade, telefone, email) {
    super(nomeCompleto, cpf, idade, telefone, email);
    this.animaisAdotados = [];
  }

  adotarAnimal(instituicao, animal) {
    if (!(instituicao instanceof Instituicao)) {
      return "A Instituição informada não existe.";
    }
    if (!animal.estaAdotado) {
      animal.estaAdotado = true;
      instituicao.animaisDisponiveisParaAdocao =
        instituicao.animaisDisponiveisParaAdocao.filter(
          (animalDisponivel) => animalDisponivel !== animal
        );
      instituicao.animaisAdotados.push(animal);

      this.animaisAdotados.push(animal);

      console.log(
        `${animal.nome} foi adotado e registrado por ${this.nomeCompleto}.`
      );
    } else {
      return `${animal.nome} já está adotado.`;
    }
  }

  listarAnimaisAdotados() {
    const listaNomesEspecies = this.animaisAdotados.map((animal) => ({
      nome: animal.nome,
      especie: animal.especie,
    }));
    return listaNomesEspecies;
  }
}

module.exports = Tutor;
