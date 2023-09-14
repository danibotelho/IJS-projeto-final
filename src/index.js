const Doador = require("./Pessoa/Doador");
const Animal = require("./Animal/Animal");
const Instituicao = require("./Instituicao/Instituicao");
const Tutor = require("./Pessoa/Tutor");

const doadorJoao = new Doador(
  "João",
  "123.456.789-00",
  35,
  "(12) 3456-7890",
  "joao@example.com"
);

const doadoraClaudia = new Doador(
  "Claudia",
  "222.888.666-33",
  40,
  "(11) 98877-8333",
  "joao@example.com"
);
const cachorro = new Animal(
  "Menina",
  "Cachorro",
  3,
  "Uma cachorra muito amigável."
);
const cachorro2 = new Animal(
  "Botão",
  "Cachorro",
  2,
  "Uma cachorrinha curiosa e que adora brincar de esconde esconde."
);
const gato = new Animal(
  "Pxon",
  "Gato",
  3,
  "Um gatinho muito esperto e carinhoso."
);
const gato2 = new Animal(
  "Blanc",
  "Gato",
  8,
  "Um gatinho fofinho e que adora dormir."
);

const instituicao = new Instituicao("Abrigo de Animais Felizes");
const tutoraMaria = new Tutor(
  "Maria",
  "789.123.456-00",
  28,
  "(11) 9876-5432",
  "maria@example.com"
);
const tutorMarcos = new Tutor(
  "Marcos",
  "789.321.654-00",
  20,
  "(85) 9876-3125",
  "marcos@example.com"
);
console.log(
  "--- Adicionando Animais a lista de disponiveis da Instituição ---"
);
instituicao.adicionarAnimalAoAbrigo(cachorro);
instituicao.adicionarAnimalAoAbrigo(cachorro2);
instituicao.adicionarAnimalAoAbrigo(gato);
instituicao.adicionarAnimalAoAbrigo(gato2);
console.log(instituicao.listarAnimaisDisponiveis());
console.log("\n");

console.log("--- Doações para a Instituição ---");
doadorJoao.doarDinheiro(instituicao, 100);
doadorJoao.doarRacao(instituicao, 10);
doadorJoao.doarMedicamento(instituicao, "Vermifugo");
console.log("\n");

doadoraClaudia.doarDinheiro(instituicao, 150);
doadoraClaudia.doarRacao(instituicao, 15);
doadoraClaudia.doarMedicamento(instituicao, "Pomada Cicatrizante");
console.log("\n");

console.log("---Listar doações que a Instituição recebeu ---");
console.log(instituicao.listarDoacoes());
console.log("\n");

console.log("--- Mostrar adoção de animal ---");
tutoraMaria.adotarAnimal(instituicao, gato);
tutorMarcos.adotarAnimal(instituicao, cachorro2);

console.log("\n");

console.log("---Listar Animais adotados e Animais disponiveis para adoção ---");
console.log("Animal adotado: ", instituicao.listarAnimaisAdotados());
console.log("\n");
console.log(
  "Animal disponivel para adoção: ",
  instituicao.listarAnimaisDisponiveis()
);
