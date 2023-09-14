const Animal = require("../Animal/Animal");
const Instituicao = require("../Instituicao/Instituicao");
const Tutor = require("./Tutor");

let instituicao;
let cachorro;
let gato;
let tutor, tutora;

beforeEach(() => {
  instituicao = new Instituicao("Abrigo de Animais Felizes");
  tutor = new Tutor(
    "João",
    "123.456.789-00",
    35,
    "(12) 3456-7890",
    "joao@example.com"
  );
  tutora = new Tutor(
    "Maria",
    "987.654.321-21",
    23,
    "(10) 99661-0101",
    "maria@example.com"
  );
  cachorro = new Animal("Rex", "Cachorro", 3, "Um cachorro muito amigável.");
  gato = new Animal('Pxon', 'Gato', 3, 'Um cachorro muito amigável.');
});
describe("Pessoa Tutora", () => {
  it("Teste se o método adotar funciona corretamente", () => {
    tutor.adotarAnimal(instituicao, cachorro);
    expect(tutor.animaisAdotados.map((cachorro) => cachorro.nome)).toStrictEqual([
      "Rex",
    ]);
  });

  it("Teste se o método adotar funciona quando duas pessoas diferentes tentam adotar o mesmo animal", () => {
    tutor.adotarAnimal(instituicao, cachorro);
    expect(tutora.adotarAnimal(instituicao, cachorro)).toEqual(`${cachorro.nome} já está adotado.`);
  });

  it("Teste se o método listarAnimaisAdotados funciona corretamente", () => {
    tutor.adotarAnimal(instituicao, gato);
    const result = tutor.listarAnimaisAdotados();
    expect(result).toEqual([{"especie": "Gato", "nome": "Pxon"}]);
  });
  
});
