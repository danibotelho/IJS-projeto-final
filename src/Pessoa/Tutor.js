
const Abrigo = require("../Abrigo/Abrigo");
const Pessoa = require("./Pessoa");

class Tutor extends Pessoa {
  constructor(nomeCompleto, cpf, idade, telefone, email) {
    super(nomeCompleto, cpf, idade, telefone, email);
    this.animaisAdotados = [];
  }

  adotarAnimal(abrigo, animal) {
    if (!(abrigo instanceof Abrigo)) {
      return "A Abrigo informada não existe.";
    }
    if (!animal.estaAdotado) {
      animal.estaAdotado = true;
      animal.tutor = this.nomeCompleto;
      abrigo.animaisDisponiveisParaAdocao =
        abrigo.animaisDisponiveisParaAdocao.filter(
          (animalDisponivel) => animalDisponivel !== animal
        );
      abrigo.animaisAdotados.push(animal);

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
