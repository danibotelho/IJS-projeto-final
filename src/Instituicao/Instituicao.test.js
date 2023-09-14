const Instituicao = require("./Instituicao");
const Animal = require("../Animal/Animal");
const Tutor = require("../Pessoa/Tutor");
const Doador = require("../Pessoa/Doador");

let instituicao;
let tutora;
let doador;
let cachorro;
let gato;

beforeEach(() => {
  instituicao = new Instituicao("Abrigo de Animais Felizes");
  tutora = new Tutor(
    "Maria",
    "987.654.321-21",
    23,
    "(10) 99661-0101",
    "maria@example.com"
  );
  doador = new Doador(
    "João",
    "987.654.321-21",
    23,
    "(10) 99661-0101",
    "joao@example.com"
  );
  cachorro = new Animal("Rex", "Cachorro", 3, "Um cachorro muito amigável.");
  gato = new Animal(
    "Pxon",
    "Gato",
    2,
    "Um gatinho preto nmuito animado e carinhoso."
  );
});
describe("Instituição", () => {
  it("Teste se o método adicionarAnimalAoAbrigo funciona corretamente", () => {
    instituicao.adicionarAnimalAoAbrigo(cachorro);
    expect(instituicao.animaisDisponiveisParaAdocao).toHaveLength(1);
  });

  it("Teste se o método listarAnimaisDisponiveis funciona corretamente", () => {
    instituicao.adicionarAnimalAoAbrigo(cachorro);
    instituicao.adicionarAnimalAoAbrigo(gato);
    const resultado = instituicao.listarAnimaisDisponiveis();

    expect(resultado).toStrictEqual([
      { especie: "Cachorro", nome: "Rex" },
      { especie: "Gato", nome: "Pxon" },
    ]);
    expect(resultado.length).toBe(2);
  });

  it("Teste se o método listarAnimaisAdotados funciona corretamente", () => {
    instituicao.adicionarAnimalAoAbrigo(cachorro);
    instituicao.adicionarAnimalAoAbrigo(gato);
    tutora.adotarAnimal(instituicao, gato);
    const resultado = instituicao.listarAnimaisAdotados();

    expect(resultado).toStrictEqual([{ especie: "Gato", nome: "Pxon" }]);
    expect(resultado.length).toBe(1);
  });

  it("Teste se o método listarDoações funciona corretamente", () => {
    doador.doarDinheiro(instituicao, 100);
    doador.doarRacao(instituicao, 10);
    doador.doarMedicamento(instituicao, "Vermifugo");
    const resultado = instituicao.listarDoacoes();

    expect(resultado).toStrictEqual([
      {
        tipo: "dinheiro",
        valor: "100.00",
      },
      {
        quantidade: "10 kg",
        tipo: "racao",
      },
      {
        quantidade: 1,
        tipo: "medicamentos",
        listaMedicamentos: ["Vermifugo"]
      },
    ]);
    expect(resultado.length).toBe(3);
  });
});
