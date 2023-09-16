const Abrigo = require("../Abrigo/Abrigo");
const Doador = require("./Doador");

let abrigo, abrigoII;
let doador1, doador2;

beforeEach(() => {
  abrigo = new Abrigo("abrigo de Animais Felizes");
  doador1 = new Doador(
    "João",
    "123.456.789-00",
    35,
    "(12) 3456-7890",
    "joao@example.com"
  );
  doador2 = new Doador(
    "Maria",
    "987.654.321-21",
    23,
    "(10) 99661-0101",
    "maria@example.com"
  );
});
describe("Pessoa Doadora", () => {
  it("Teste se o método doarDinheiro funciona corretamente", () => {
    doador1.doarDinheiro(abrigo, 100);
    expect(abrigo.doacoes.dinheiro).toBe(100);
  });

  it("Teste se o método doarRacao funciona corretamente", () => {
    doador1.doarRacao(abrigo, 10);
    doador2.doarRacao(abrigo, 20);

    expect(abrigo.doacoes.racao).toBe(30);
  });

  it("Teste se o método doarMedicamento funciona corretamente", () => {
    doador2.doarMedicamento(abrigo, "Vermifugo");
    const result = abrigo.doacoes.medicamentos;
    expect(result).toStrictEqual(["Vermifugo"]);
  });

  it("Teste se o método doarDinheiro quando a Intituição informada não existe", () => {
    const resultado = doador1.doarDinheiro(abrigoII, 100);
    expect(resultado).toBe("A Intuição Informada não existe.");
  });

  it("Teste se o método doarRacao quando a Intituição informada não existe", () => {
    const resultado = doador1.doarRacao(abrigoII, 10);
    expect(resultado).toBe("A Intuição Informada não existe.");
  });

  it("Teste se o método doarMedicamento quando a Intituição informada não existe", () => {
    const resultado = doador2.doarMedicamento(abrigoII, "Vermifugo");
    expect(resultado).toEqual("A Intuição Informada não existe.");
  });

  it("Teste se o método doarDinheiro e doarRacao deve retornar mensagm quando o valor doado for menor igual a zero", () => {
    const resultado = doador1.doarRacao(abrigo, 0);
    const resultadoII = doador2.doarDinheiro(abrigo, 0);
    expect(resultado).toEqual(
      "A quantidade de ração doada deve ser maior que zero."
    );
    expect(resultadoII).toEqual(
      "O valor da doação em dinheiro deve ser maior que zero."
    );
  });
});
