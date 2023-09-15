import Pessoa from "./Pessoa.js";
import readline from 'readline-sync';

const ETNIA = {
  AMARELA: "Amarela",
  BRANCA: "Branca",
  PRETA: "Preta",
  PARDA: "Parda",
  INDIGENA: "Indigena",
}
const SEXO = {
  MASCULINO: "Masculino",
  FEMININO: "Feminino",
  OUTROS: "Outros"
}

let paciente0 = new Pessoa('Weslley', 84368224521, 'Mae', '81 9 85493221', '19/01/2001', ETNIA.BRANCA, SEXO.MASCULINO, '5024755', 'weslley3443@bol.com');
let paciente1 = new Pessoa('Vagner', 54353454376, 'Outra mae', '88 9 38459845', '15/12/2002', ETNIA.PARDA, SEXO.FEMININO, '5589655', 'algo@hotmail.com', "Rogerio do creo");
let listaPacientes = [];
listaPacientes.push(paciente0);
listaPacientes.push(paciente1);
let loop = true;


while (loop) {
  console.clear();
  console.log("== CADASTRO DE PACIENTE ==");
  console.log("========== MENU ==========");
  console.log("0 - Sair do sistema");
  console.log("1 - Listar todos os pacientes");
  console.log("2 - Cadastrar um novo paciente");
  console.log("3 - Buscar o paciente");
  console.log("4 - Alterar o paciente");
  console.log("5 - Remover o paciente");
  console.log("==========================");
  let opcao = readline.questionInt("Escolha uma opcao: ");
  switch (opcao) {
    case 1:
      let count = 1;
      console.log("Listando todos os pacientes");
      console.log("------------------------");
      for (const p of listaPacientes) {
        console.log(`Paciente ${count++}`);
        console.log(p);
      }
      console.log("------------------------");
      readline.keyInPause();
      break;
    case 2:
      let nome = readline.question("Digite o nome do paciente:");
      let pergunta = readline.question("Tem nome social ?(s/n) ");
      let nomeS;
      if (pergunta == "S" || pergunta == "s") {
        nomeS = readline.question("Digite seu nome: ");
      }
      let nomeMae = readline.question("Digite o nome da mãe:");
      let cpf = readline.questionInt("Digite o cpf:");
      let tel = readline.question("Digite o telefone:");
      let dataNasc = readline.question("Digite a data de nascimento:");
      let etnia = readline.question("Digite a etnia:");
      let sexo = readline.question("Digite o sexo:");
      let cep = readline.question("Digite o cep:");
      let email = readline.question("Digite o email:");
      let paciente;
      if (pergunta == "S" || pergunta == "s") {
        paciente = new Pessoa(nome, cpf, nomeMae, tel, dataNasc, etnia, sexo, cep, email, nomeS);
      } else {
        paciente = new Pessoa(nome, cpf, nomeMae, tel, dataNasc, etnia, sexo, cep, email);
      }
      listaPacientes.push(paciente);
      console.log("Paciente cadastrado com sucesso!");
      readline.keyInPause();
      break;
    case 3:
      let cpfBusca = readline.questionInt(
        "Cpf do paciente que deseja buscar: "
      );
      for (const a of listaPacientes) {
        if (a.cpf === cpfBusca) {
          console.log("Resultado da busca");
          console.log("------------------------");
          console.log(a);
        }
      }
      readline.keyInPause();
      break;
    case 4:
      let cpfBusca1 = readline.questionInt(
        "Cpf do paciente que deseja alterar: "
      );
      for (const a of listaPacientes) {
        if (a.cpf === cpfBusca1) {
          a.nome = readline.question("Digite o nome do paciente:");
          a.pergunta = readline.question("Tem nome social ?(s/n) ");
          if (pergunta == "S" || pergunta == "s") {
            a.nomeS = readline.question("Digite seu nome: ");
          }
          a.nomeMae = readline.question("Digite o nome da mãe:");
          a.cpf = readline.questionInt("Digite o cpf:");
          a.tel = readline.question("Digite o telefone:");
          a.dataNasc = readline.question("Digite a data de nascimento:");
          a.etnia = readline.question("Digite a etnia:");
          a.sexo = readline.question("Digite o sexo:");
          a.cep = readline.question("Digite o cep:");
          a.email = readline.question("Digite o email:");
        }
      }
      console.log("paciente alterado com sucesso!");
      readline.keyInPause();
      break;
    case 5:
      let buscaCpf2 = readline.questionInt(
        "Cpf do paciente que deseja alterar: "
      );
      for (const a of listaPacientes) {
        if (a.cpf === buscaCpf2) {
          console.log(`Excluido paciente ${a.nome} do sistema..."`);
          listaPacientes.splice(a, 1);
        }
      }
      console.log("paciente excluído com sucesso!");
      readline.keyInPause();
      break;
    case 0:
      console.log("Saindo do sistema...");
      loop = false;
      break;
    default:
      console.log("Opção invalida!");
      break;
  }
}

