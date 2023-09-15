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
      console.log("Listando todos os pacientes");
      console.log("------------------------");
      listar(listaPacientes);
      console.log("------------------------");
      readline.keyInPause();
      break;
    case 2:
      cadastrar(listaPacientes);
      console.log("Paciente cadastrado com sucesso!");
      readline.keyInPause();
      break;
    case 3:
      buscar(listaPacientes);
      readline.keyInPause();
      break;
    case 4:
      alterar(listaPacientes);
      console.log("paciente alterado com sucesso!");
      readline.keyInPause();
      break;
    case 5:
      remover(listaPacientes);
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

function listar(listaPacientes) {
  let count = 0;
  for (const p of listaPacientes) {
    console.log(`Paciente ${count++}`);
    console.log(p);
  }
}
function cadastrar(listaPacientes) {
  let nome, nomeS, nomeMae, cpf, tel, dataNasc, etnia, sexo, cep, email
  do {
    try {
      nome = readline.question("Digite o nome do paciente:");
      if (!isNaN(nome)) {
        throw 'Números não são permitidos'
      }
      if (nome.length < 3) {
        throw 'Nome muito pequeno'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (!isNaN(nome) || nome.length < 3);

  let pergunta = readline.question("Tem nome social ?(s/n) ");
  nomeS;
  if (pergunta == "S" || pergunta == "s") {
    nomeS = readline.question("Digite seu nome social: ");
  }

  do {
    try {
      nomeMae = readline.question("Digite o nome da mãe:");
      if (!isNaN(nomeMae)) {
        throw 'Números não são permitidos'
      }
      if (nomeMae.length < 3) {
        throw 'Nome muito pequeno'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (!isNaN(nomeMae) || nomeMae.length < 3);

  do {
    try {
      cpf = readline.questionInt("Digite o cpf:");
      if (isNaN(cpf)) {
        throw 'Letras não são permitidos'
      }
      if (cpf.length != 11) {
        throw 'Tamanho incorreto'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (isNaN(cpf) || cpf.length != 11);

  do {
    try {
      let ddd = readline.question("Digite o ddd do telefone:");
      let numero = readline.question("Digite o número do telefone:");
      tel = ddd + " " + numero
      if (isNaN(tel)) {
        throw 'Letras não são permitidos'
      }
      if (tel.length != 12) {
        throw 'Número incorreto'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (isNaN(tel) || tel.length != 12);

  do {
    try {
      let dia = readline.question("Digite o dia que nasceu:");
      let mes = readline.question("Digite o mes que nasceu:");
      let ano = readline.question("Digite o ano que nasceu:");
      dataNasc = dia + '/' +mes + '/' +ano;
      if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        throw 'Letras não são permitidos'
      }
      if (dataNasc.length != 10) {
        throw 'Tamanho incorreto'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (isNaN(dia) || isNaN(mes) || isNaN(ano) || tel.length != 10);
  opcao = readline.questionInt("Digite a etnia\n1-Amarela\n2-Branca\n3-Preta\n4-Parda\n5-Indigena\n");
  etnia;
  switch (opcao) {
    case 1:
      etnia = ETNIA.AMARELA;
      break;

    case 2:
      etnia = ETNIA.BRANCA;
      break;

    case 3:
      etnia = ETNIA.PRETA;
      break;

    case 4:
      etnia = ETNIA.PARDA;
      break;

    case 5:
      etnia = ETNIA.INDIGENA;
      break;

    default:
      console.log("Valor errado");
      etnia = "Undefined";
      break;
  }
  opcao = readline.questionInt("Digite o sexo\n1-Masculino\n2-Femenino\n3-Outros\n");
  sexo;
  switch (opcao) {
    case 1:
      sexo = SEXO.MASCULINO;
      break;

    case 2:
      sexo = SEXO.FEMININO;
      break;

    case 3:
      sexo = SEXO.OUTROS;
      break;

    default:
      console.log("Valor errado");
      sexo = "Undefined";
      break;
  }

  do {
    try {
      cep = readline.questionInt("Digite o cep:");
      if (cep.length != 8) {
        throw 'Tamanho incorreto'
      }
    } catch (e) {
      console.log(e + "\n");
    }
  } while (cep.length != 8);
  email = readline.question("Digite o email:");
  let paciente;
  if (pergunta == "S" || pergunta == "s") {
    paciente = new Pessoa(nome, cpf, nomeMae, tel, dataNasc, etnia, sexo, cep, email, nomeS);
  } else {
    paciente = new Pessoa(nome, cpf, nomeMae, tel, dataNasc, etnia, sexo, cep, email);
  }
  listaPacientes.push(paciente);
}
function buscar(listaPacientes) {
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
}
function alterar(listaPacientes) {
  let cpfBusca = readline.questionInt(
    "Cpf do paciente que deseja alterar: "
  );
  for (const a of listaPacientes) {
    if (a.cpf === cpfBusca) {
      a.setNome(readline.question("Digite o nome do paciente:"));
      pergunta = readline.question("Tem nome social ?(s/n) ");
      if (pergunta == "S" || pergunta == "s") {
        a.setNomeS(readline.question("Digite seu nome social: "));
      }
      a.setNomeMae(readline.question("Digite o nome da mãe:"));
      a.setCpf(readline.questionInt("Digite o cpf:"));
      a.setTel(readline.question("Digite o telefone:"));
      a.setDataNasc(readline.question("Digite a data de nascimento:"));
      let opcao = readline.questionInt("Digite a etnia\n1-Amarela\n2-Branca\n3-Preta\n4-Parda\n5-Indigena\n");
      switch (opcao) {
        case 1:
          a.setEtnia(ETNIA.AMARELA);
          break;

        case 2:
          a.setEtnia(ETNIA.BRANCA);
          break;

        case 3:
          a.setEtnia(ETNIA.PRETA);
          break;

        case 4:
          a.setEtnia(ETNIA.PARDA);
          break;

        case 5:
          a.setEtnia(ETNIA.INDIGENA);
          break;

        default:
          console.log("Valor errado");
          a.setEtnia("Undefined");
          break;
      }
      opcao = readline.questionInt("Digite o sexo\n1-Masculino\n2-Femenino\n3-Outros\n");
      switch (opcao) {
        case 1:
          a.setSexo(SEXO.MASCULINO)
          break;

        case 2:
          a.setSexo(SEXO.FEMININO)
          break;

        case 3:
          a.setSexo(SEXO.OUTROS)
          break;

        default:
          console.log("Valor errado");
          a.setSexo("Undefined");
          break;
      }
      a.setCep(readline.question("Digite o cep:"));
      a.setEmail(readline.question("Digite o email:"));
    }
  }
}
function remover(listaPacientes) {
  let cpfBusca = readline.questionInt(
    "Cpf do paciente que deseja excluir: "
  );
  for (const a of listaPacientes) {
    if (a.cpf === cpfBusca) {
      console.log(`Excluido paciente ${a.nome} do sistema..."`);
      listaPacientes.splice(a, 1);
    } else {
      console.log("Esse paciente nao existe");
    }
  }
}