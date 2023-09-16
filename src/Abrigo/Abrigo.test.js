const Abrigo = require("./Abrigo");
const Animal = require("../Animal/Animal");
const Tutor = require("../Pessoa/Tutor");
const Doador = require("../Pessoa/Doador");

let abrigo;
let tutora;
let doador;
let cachorro;
let gato;

beforeEach(() => {
  abrigo = new Abrigo("abrigo de Animais Felizes");
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
    "Um gatinho preto muito animado e carinhoso."
  );
});
describe("Abrigo", () => {
  it("Teste se o método adicionarAnimalAoabrigo funciona corretamente", () => {
    abrigo.adicionarAnimalAoabrigo(cachorro);
    expect(abrigo.animaisDisponiveisParaAdocao).toHaveLength(1);
  });

  it("Teste se o método listarAnimaisDisponiveis funciona corretamente", () => {
    abrigo.adicionarAnimalAoabrigo(cachorro);
    abrigo.adicionarAnimalAoabrigo(gato);
    const resultado = abrigo.listarAnimaisDisponiveis();

    expect(resultado).toStrictEqual([
      { especie: "Cachorro", nome: "Rex" },
      { especie: "Gato", nome: "Pxon" },
    ]);
    expect(resultado.length).toBe(2);
  });

  it("Teste se o método listarAnimaisAdotados funciona corretamente", () => {
    abrigo.adicionarAnimalAoabrigo(cachorro);
    abrigo.adicionarAnimalAoabrigo(gato);
    tutora.adotarAnimal(abrigo, gato);
    const resultado = abrigo.listarAnimaisAdotados();

    expect(resultado).toStrictEqual([{ especie: "Gato", nome: "Pxon" }]);
    expect(resultado.length).toBe(1);
  });

  it("Teste se o método listarDoações funciona corretamente", () => {
    doador.doarDinheiro(abrigo, 100);
    doador.doarRacao(abrigo, 10);
    doador.doarMedicamento(abrigo, "Vermifugo");
    const resultado = abrigo.listarDoacoes();

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
        listaMedicamentos: ["Vermifugo"],
      },
    ]);
    expect(resultado.length).toBe(3);
  });

  it("Teste se o método listarDoações funciona corretamente", () => {
    const resultado = abrigo.listarDoacoes();
    expect(resultado).toStrictEqual([
      { tipo: "dinheiro", valor: "0.00" },
      { quantidade: "0 kg", tipo: "racao" },
      {
        listaMedicamentos: [],
        quantidade: 0,
        tipo: "medicamentos",
      },
    ]);
  });
});
