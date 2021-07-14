"use strict";
// boolean --> 
//var é variavel global nao é bom, const fixo vai ter mesmo valor, se for preciso mudar valor mudamos let JAVASCRIPT
var contapaga = false;
// NUMBER
var idade = 23;
var avaliacao = 2.3;
//string
var nome = 'Hyagao';
// array
// d que neh o tipo que estao edentro
var amostras = [1, 1];
//outra maneira também mais verbosa muito utilizada
var amostras2 = [2, 3, 4, 5, 6, 67, 10];
// tuple
//parecido com array 
// vamos colocar let para atribuir em seguida mudando o valor
// array de 3 posicoes sendo string numero e bollean
var jogadores;
jogadores = ['hyaguin', 3, true];
//enum
// mapeamento de informacoes
var estatusAprovacao;
(function (estatusAprovacao) {
    estatusAprovacao["Aprovado"] = "001";
    estatusAprovacao["Pendente"] = "002";
    estatusAprovacao["Rejeitado"] = "003";
    // MAP DAS INFORMACOES
})(estatusAprovacao || (estatusAprovacao = {}));
//status é variavel global
var statusdaaprovacao = estatusAprovacao.Aprovado;
// 0 1 2 eles ganham estes atributos apenas 
// mas posso criar
// como esta 001 ..
// any
// array de n --> indefinido de variais informacoes de tipos diferentes
// aceita qualquer coisa, porque ele não aceita nada NAO E RECOMENDADO
// --> QUANDO DESCREVE ALGO --> COMPLEMENTO 
//--> API VAI DA UM ERRO bugs usamos any 
var retornodaApi = [563, 'hyago', true];
// objeto com um mont de informacao e nao sabemos que que vem entao 
//dizemos que é qualquer tipo ANULAR A TIPAGEM TYPESCRIPT 
//USAR COM CAUTELA
var retornodaApi2 = {
//...
};
// void
// funcao que nao retorna nda
function printarNaTela(msg) {
    console.log(msg);
}
//null e undefined 
// vazia ou nao definida
var u = undefined;
var n = null;
// objeto tipo nao premitivo
// exemplo um number tals
function criar(objeto) {
    //....
}
//chamando a funcao criar
// preciso colocar algo __ nao numero nao string ...
// --> e sim  objet
criar({
    propiedade: 1,
});
//criar ('Vitor') // da erro
// Never
function loopInfinito() {
    while (true) { }
}
function mesgerro(msgem) {
    throw new Error(msgem);
}
//typescript infere que essa e never tambem 
function falha() {
    return mesgerro('algo falhou');
}
//UNION TYPES
var nota = 'hyago';
var nomes = 3;
//${ } --> puramente javascript
function exibirNota(nota) {
    console.log("sua nota \u00E9 " + nota);
}
// bollean false true da erro
exibirNota(10);
exibirNota('hyago');
//type Funcionarios = Array<Funcionarios>;
var funcionarios = [{
        nome: 'hyago',
        sobrenome: 'farias',
        datadenacimento: new Date()
    }];
// mt util quado temos typo bem grande ou
function trataFuncionarios(funcionarios) {
    // .....
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('nome do funcionario', funcionario.nome);
    }
}
// ele ja fez uma inferencia de number 
// tsconfig ,jason
var altura = 1.6;
altura = null;
var contato = {
    nome: 'vitor',
    telefone1: '131442412',
    telefone2: null,
};
// Type Assertion
// casting de outra linguagem "tratamento", para typescriot saber qual
// tipo de certa variavel
var minhaIdade = 23;
// tipo de variavel
// Type Assertion vai produzir um tipo NUMBER!!!! 
// NOS ASSEGURAMOS O TIPO DA VARIAVEL
minhaIdade.toString();
//ou
// ou tambem podemos colocar como fizemos em cima
minhaIdade.toString();
// pegamos do html document.getelementbyid pegamos o valor que ta no input
// fazemos um assert
var input = document.getElementById("numero1");
console.log(input.value);
// outra notacao para ASSERTION
var input2 = document.getElementById("numero1");
console.log(input.value);
