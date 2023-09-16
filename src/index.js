
const Doador = require("./Pessoa/Doador");
const Animal = require("./Animal/Animal");
const Abrigo = require("./Abrigo/Abrigo");
const Tutor = require("./Pessoa/Tutor");

const abrigo = new Abrigo("Abrigo de Animais Felizes", 
"Rua de Animais", "Bem-estar e a segurança dos animais,");

const cachorro = new Animal("Menina","Cachorro", 3, 
"Uma cachorra muito amigável.");

const doadorJoao = new Doador("João","123.456.789-00", 35,
 "(12) 3456-7890", "joao@example.com");

 const tutoraMaria = new Tutor("Maria","789.123.456-00", 28,
"(11) 9876-5432", "maria@example.com");

const doadoraClaudia = new Doador(
  "Claudia",
  "222.888.666-33",
  40,
  "(11) 98877-8333",
  "joao@example.com"
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

const tutorMarcos = new Tutor(
  "Marcos",
  "789.321.654-00",
  20,
  "(85) 9876-3125",
  "marcos@example.com"
);
console.log(
  "--- Adicionando Animais a lista de disponiveis da Abrigo ---"
);
abrigo.adicionarAnimalAoabrigo(cachorro);
abrigo.adicionarAnimalAoabrigo(cachorro2);
abrigo.adicionarAnimalAoabrigo(gato);
abrigo.adicionarAnimalAoabrigo(gato2);
console.log(abrigo.listarAnimaisDisponiveis());
console.log("\n");

console.log("--- Doações para a Abrigo ---");
doadorJoao.doarDinheiro(abrigo, 100);
doadorJoao.doarRacao(abrigo, 10);
doadorJoao.doarMedicamento(abrigo, "Vermifugo");
console.log("\n");

doadoraClaudia.doarDinheiro(abrigo, 150);
doadoraClaudia.doarRacao(abrigo, 15);
doadoraClaudia.doarMedicamento(abrigo, "Pomada Cicatrizante");
console.log("\n");

console.log("---Listar doações que a Abrigo recebeu ---");
console.log(abrigo.listarDoacoes());
console.log("\n");

console.log("--- Mostrar adoção de animal ---");
tutoraMaria.adotarAnimal(abrigo, gato);
tutorMarcos.adotarAnimal(abrigo, cachorro2);
console.log(`${gato.nome} foi adotado por ${gato.tutor}`)

console.log("\n");

console.log("---Listar Animais adotados e Animais disponiveis para adoção ---");
console.log("Animal adotado: ", abrigo.listarAnimaisAdotados());
console.log("\n");
console.log(
  "Animal disponivel para adoção: ",
  abrigo.listarAnimaisDisponiveis()
);
