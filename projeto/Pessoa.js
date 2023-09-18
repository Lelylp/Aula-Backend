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
    
    get getNome(){
        return this.nome;
    }
    get getNomeS(){
        return this.nomeS;
    }
    get getNomeMae(){
        return this.nomeMae;
    }
    get getCpf(){
        return this.cpf;
    }
    get getTel(){
        return this.tel;
    }
    get getDataNasc(){
        return this.dataNasc;
    }
    get getEtnia(){
        return this.etnia;
    }
    get getSexo(){
        return this.sexo;
    }
    get getCep(){
        return this.cep;
    }
    get getEmail(){
        return this.email;
    }

    set setNome(nome){
        this.nome = nome;
    }
    set setNomeS(nomeS){
        this.nomeS = nomeS;
    }
    set setNomeMae(nomeMae){
        this.nomeMae = nomeMae;
    }
    set setCpf(cpf){
        this.cpf = cpf;
    }
    set setTel(tel){
        this.tel = tel;
    }
    set setDataNasc(dataNasc){
        this.dataNasc = dataNasc;
    }
    set setEtnia(etnia){
        this.etnia = etnia;
    }
    set setSexo(sexo){
        this.sexo = sexo;
    }
    set setCep(cep){
        this.cep = cep;
    }
    set setEmail(email){
        this.email = email;
    }
}
//criou uma class chamada pessoa e seus metodos de inserir valor e retornar o valor