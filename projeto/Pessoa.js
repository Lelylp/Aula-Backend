export default class Pessoa {

    constructor(nome, cpf, nomeMae, tel, dataNasc, etnia, sexo, cep, email, nomeS = "Null") {
        this.nome = nome;
        this.nomeS = nomeS
        this.nomeMae = nomeMae;
        this.cpf = cpf;
        this.tel = tel;
        this.dataNasc = dataNasc;
        this.etnia = etnia;
        this.sexo = sexo;
        this.cep = cep;
        this.email = email;
    }
}