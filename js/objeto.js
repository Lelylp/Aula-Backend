//quest 1
let pessoa = {
    nome:"",
    idade:22
}
let pessoa2 = new Object();

//quest 2
pessoa.nome = "João";

//quest 3
console.log(pessoa.idade);

//quest 4
let produto = {
    preco:50
}
produto.preco = 75;

//quest 5
let contato = {
    email:"algumacoisa@hotmail.com"
}
delete contato.email;
console.log(contato);

//quest 6
let cliente = {
    nome:"Cliente"
}
cliente.endereco = "Rua A, 123";

//quest 7
let empresa = {
    departamentos:[
        "Logistica",
        "RH",
        "Mais Algum"
    ]
}
console.log(empresa.departamentos[0]);

//quest 8
let aluno = {
    notas:[
        85,
        90,
        78
    ]
}
aluno.notas[1] = 95;

//quest 9
let dados = {
    valores:[
        10,
        20,
        30
    ]
}
dados.valores.splice(1, 1);
console.log(dados);

//quest 10
let livro = {
    titulo:"Livro",
    autor:"Maria"
}

///ENUM
const DIASDASEMANA = {
    SEGUNDA:"Segunda-feira",
    TERCA:"Terça-feira",
    QUARTA:"Quarta-feira",
    QUINTA:"Quinta-feira",
    SEXTA:"Sexta-feira",
    SABADO:"Sábado",
    DOMINGO:"Domingo"
}

const INIMIGOS ={
    MOB1:"Esqueleto",
    MOB2:"Aranha",
    MOB3:"Zumbi",
    BOSS1:"Dragão",
    BOSS2:"Golem",
    BOSS3:"Bruxa"
}

const PASSAGENS = {
    PASS1:"Econômica",
    PASS2:"Executiva",
    PASS3:"Primeira Classe"
}

const TAREFAS = {
    TAREFA1:"Trabalho",
    TAREFA2:"Estudo",
    TAREFA3:"Lazer"
}

const STATUS = {
    STS1:"Em processamento",
    STS2:"Enviado",
    STS3:"Entregue"
}
