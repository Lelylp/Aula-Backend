import Pessoa from "./Pessoa.js";
import readline from 'readline-sync';
// let listaPacientes = [];
// let paciente0 = new Pessoa();
// console.log(paciente0);
// let paciente1 = new Pessoa();
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
        for (const p in listaPacientes) {
            console.log(p);
        }
        console.log("------------------------");
        readline.keyInPause();
        break;
      case 2:
        let nome = readline.question("Digite o nome do paciente:");
        let pergunta = readline.question("Tem nome social ? ");
        if (pergunta == "S" || pergunta == "s") {
           let nomeS = readline.question("Digite seu nome: ");
        }
        let nomeMae = readline.question("Digite o nome da mãe:");
        let cpf = readline.question("Digite o cpf:");
        let tel = readline.question("Digite o telefone:");
        let dataNasc = readline.question("Digite a data de nascimento:");
        let etnia = readline.question("Digite a etnia:");
        let sexo =readline.question("Digite o sexo:");
        let cep =readline.question("Digite o cep:");
        let email =readline.question("Digite o email:");
        paciente = new Pessoa(nome, "null", cpf, nomeMae, tel, dataNasc, etnia, sexo, cep, email);
        listaPacientes.push(paciente);
        console.log("Paciente cadastrado com sucesso!");
        readline.keyInPause();
        break;
      case 3:
        matriculaBusca = readline.questionInt(
          "Matricula do aluno que deseja buscar: "
        );
        for (const a of alunos) {
          if (a.matricula === matriculaBusca) {
            console.log("Resultado da busca");
            console.log("------------------------");
            //console.log(`Matricula: ${a.matricula}`);
            //console.log(`Nome: ${a.nome}`);"
          }
        }
        readline.keyInPause();
        break;
      case 4:
        matriculaBusca = readline.questionInt(
          "Matricula do aluno que deseja alterar: "
        );
        for (const a of alunos) {
          if (a.matricula === matriculaBusca) {
            console.log(a.nome);
            a.nome = readline.question("Digite o nome do aluno:");
            for (let i = 0; i < a.notas.length; i++) {
              a.notas[i] = readline.questionFloat(`Digite a nota ${i + 1}: `);
            }
          }
        }
        console.log("Aluno alterado com sucesso!");
        readline.keyInPause();
        break;
      case 5:
        matriculaBusca = readline.questionInt(
          "Matricula do aluno que deseja alterar: "
        );
        for (const a of alunos) {
          if (a.matricula === matriculaBusca) {
            console.log(a.nome);
            console.log(`Excluido aluno ${a.nome} do sistema..."`);
            alunos.splice(a, 1);
          }
        }
        console.log("Aluno excluído com sucesso!");
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

const ETNIA = {
    AMARELA:"Amarela",
    BRANCA:"Branca",
    PRETA:"Preta",
    PARDA:"Parda",
    INDIGENA:"Indigena",
}
const SEXO = {
    MASCULINO:"Masculino",
    FEMININO:"Feminino",
    OUTROS:"Outros"
}