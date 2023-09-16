const Pessoa = require("./Pessoa");

describe("Pessoa", () => {
  let pessoa;

  beforeEach(() => {
    pessoa = new Pessoa(
      "João Silva",
      "12345678900",
      30,
      "123-456-7890",
      "joao@example.com"
    );
  });

  it("deve criar uma instância de Pessoa", () => {
    expect(pessoa).toBeInstanceOf(Pessoa);
  });

  it("deve retornar o nome completo da pessoa", () => {
    expect(pessoa.nomeCompleto).toBe("João Silva");
  });

  it("deve permitir definir um novo nome completo da pessoa", () => {
    pessoa.nomeCompleto = "Fernando Santos"
    expect(pessoa.nomeCompleto).toBe("Fernando Santos");
  });

  it("deve retornar a idade da pessoa", () => {
    expect(pessoa.idade).toBe(30);
  });

  it("deve permitir definir uma nova idade", () => {
    pessoa.idade = 40;
    expect(pessoa.idade).toBe(40);
  });

  it("deve retornar o CPF da pessoa", () => {
    expect(pessoa.cpf).toBe("12345678900");
  });

  it("deve permitir definir um novo CPF", () => {
    pessoa.cpf = "98765432100";
    expect(pessoa.cpf).toBe("98765432100");
  });

  it("deve retornar o telefone da pessoa", () => {
    expect(pessoa.telefone).toBe("123-456-7890");
  });

  it("deve permitir definir um novo telefone", () => {
    pessoa.telefone = "987-654-3210";
    expect(pessoa.telefone).toBe("987-654-3210");
  });

  it("deve retornar o email da pessoa", () => {
    expect(pessoa.email).toBe("joao@example.com");
  });
});
