console.log("=== CADASTRO DE ALUNOS ===");
console.log("========== MENU ==========");
console.log("0 - Sair do Sistemas");
console.log("1 - Listar todos os alunos");
console.log("2 - Cadastrar um novo aluno");
console.log("3 - Buscar aluno");
console.log("4 - Alterar aluno");
console.log("==========================");
var matricula = 1
let loop = true

const aluno1 = {
    nome:"Weslley",
    notas:[7,6,6],
    matricula:matricula
}

const aluno2 = {
    nome:"Sarah",
    notas:[9,7,10],
    matricula:++matricula
}

let alunos = [aluno1, aluno2];

while (loop) {
    let opcao = require('readline-sync').questionInt("Digite uma opcao: ");
    switch (opcao) {
        case 0:
            console.log("Saindo so sistema...");
            loop = !loop;
            break;
        case 1:
            console.log("Listando todos os alunos");
            for (const a of alunos) {
                console.log(`\nNome: ${a.nome}`);
                console.log("Notas: ");
                for (const n in a.notas) {
                    console.log(a.notas[n]);
                }
                console.log(`Matricula: ${a.matricula}`);
            }
            break;
        case 2:
            cadastrarAluno();
            break;
        default:
            console.log("Opcao invalida");
            break;
    } 
}

function cadastrarAluno() {
    let nome = require('readline-sync').question("Digite seu nome: ");
    let nota = Array(3);
    for (let i = 0; i < nota.length; i++) {
        nota[i] = require('readline-sync').questionFloat(`Digite sua nota${i+1}: `);
    }
    let novoAluno ={
        nome:nome,
        notas:nota,
        matricula:++matricula
    }
    alunos.push(novoAluno);
}