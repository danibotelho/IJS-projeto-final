const Animal = require("./Animal");

describe("Animal", () => {
  it("Teste se o método adotar funciona corretamente", () => {
    const animal = new Animal("Rex", "Cachorro", 3, "Um cachorro muito amigável.");
    expect(animal.estaAdotado).toBe(false);
    animal.adotar();
    expect(animal.estaAdotado).toBe(true);
  });
  it("Teste se o método descrever retorna a descrição correta", () => {
    const animal = new Animal("Rex", "Cachorro", 3, "Um cachorro muito amigável.");
    expect(animal.descrever()).toBe(
      "Rex (Cachorro, 3 anos): Um cachorro muito amigável."
    );
  });
});
