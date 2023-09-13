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
        medicamentos: []
      }; 
    };
    
    adicionarAnimalAoAbrigo(animal) {
      this.animaisDisponiveisParaAdocao.push(animal);
    };

    adicionarAnimalAdotado(animal) {
      this.animaisAdotados.push(animal);
      if (animal.estaAdotado){
          removerAnimalAdotado(animal)
      }
    };
  
    listarAnimaisDisponiveis() {
      return this.animaisDisponiveisParaAdocao;
    };

    listarAnimaisAdotados() {
      return this.animaisAdotados;
    };

    removerAnimalAdotado(animal) {
        if (animal.estaAdotado) {
        const index = this.animaisAdotados.indexOf(animal);
        if (index !== -1) {
            animal.estaAdotado = false;
            this.animaisAdotados.splice(index, 1);
            console.log(`${animal.nome} foi removido da lista de animais adotados por ${this.nome}.`);
        }
        } else {
        console.error(`${animal.nome} não está na lista de animais adotados por ${this.nome}.`);
        }
    }
    
}
module.exports = Instituicao;