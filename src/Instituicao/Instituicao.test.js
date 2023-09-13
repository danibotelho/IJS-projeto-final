const Instituicao = require("./Instituicao");
const Animal = require("../Animal/Animal");

let instituicao;
let animal;
let animal2

beforeEach(() => {
  instituicao = new Instituicao("Abrigo de Animais Felizes");
  animal = new Animal("Rex", "Cachorro", 3, "Um cachorro muito amigável.");
  animal2 = new Animal("Pxon", "Gato", 2,  "Um gatinho preto nmuito animado e carinhoso.");
});
describe("Instituição", () => {
  it("Teste se o método adicionarAnimalAoAbrigo funciona corretamente", () => {
    instituicao.adicionarAnimalAoAbrigo(animal);
    expect(instituicao.animaisDisponiveisParaAdocao).toHaveLength(1);
  });

  it("Teste se o método removerAnimalAdotado funciona corretamente", () => {
    instituicao.adicionarAnimalAoAbrigo(animal2);
    expect(instituicao.animaisDisponiveisParaAdocao).toHaveLength(1);
    
    instituicao.removerAnimalAdotado(animal2);
    expect(instituicao.animaisAdotados).toHaveLength(0);
  });
});
