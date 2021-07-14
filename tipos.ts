// boolean --> 
//var é variavel global nao é bom, const fixo vai ter mesmo valor, se for preciso mudar valor mudamos let JAVASCRIPT
const contapaga: boolean = false;

// NUMBER
const idade: number = 23;
const avaliacao: number = 2.3;

//string
const nome:string = 'Hyagao';

// array
// d que neh o tipo que estao edentro
const amostras:number[] = [1,1];

//outra maneira também mais verbosa muito utilizada
const amostras2:Array<number> = [2,3,4,5,6,67,10];

// tuple
//parecido com array 
// vamos colocar let para atribuir em seguida mudando o valor
// array de 3 posicoes sendo string numero e bollean
let jogadores : [string,number,boolean]
jogadores = ['hyaguin',3,true];

//enum
// mapeamento de informacoes
enum estatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003',
    // MAP DAS INFORMACOES

}
//status é variavel global
const statusdaaprovacao:estatusAprovacao = estatusAprovacao.Aprovado;
// 0 1 2 eles ganham estes atributos apenas 
// mas posso criar
// como esta 001 ..

// any
// array de n --> indefinido de variais informacoes de tipos diferentes
// aceita qualquer coisa, porque ele não aceita nada NAO E RECOMENDADO
// --> QUANDO DESCREVE ALGO --> COMPLEMENTO 
//--> API VAI DA UM ERRO bugs usamos any 
const retornodaApi: any[] = [563,'hyago', true];
// objeto com um mont de informacao e nao sabemos que que vem entao 
//dizemos que é qualquer tipo ANULAR A TIPAGEM TYPESCRIPT 
//USAR COM CAUTELA
const retornodaApi2: any = {
    //...
};

// void
// funcao que nao retorna nda
function printarNaTela(msg: string): void{
        console.log(msg);

}   

//null e undefined 
// vazia ou nao definida
const u: undefined = undefined;
const n: null = null;

// objeto tipo nao premitivo
// exemplo um number tals
function criar(objeto: object){
    //....
}
//chamando a funcao criar
// preciso colocar algo __ nao numero nao string ...
// --> e sim  objet
criar({
    propiedade:1,
})

//criar ('Vitor') // da erro

// Never
function loopInfinito():never{
    while(true){}
}

function mesgerro(msgem: string):never{
    throw new Error(msgem);


}
//typescript infere que essa e never tambem 
function falha(){
    return mesgerro('algo falhou')
}

//UNION TYPES

const nota : string | number =  'hyago'
const nomes : string | number =  3
//${ } --> puramente javascript
function exibirNota(nota: number | string){
    console.log(`sua nota é ${nota}`);
}
// bollean false true da erro
exibirNota(10);
exibirNota('hyago');


//Alias
// criar um type so para funcionarios
type Funcionarios = {
    nome: string;
    sobrenome: string;
    datadenacimento: Date;
}

//type Funcionarios = Array<Funcionarios>;

const funcionarios: Funcionarios[] =[{

    nome: 'hyago',
    sobrenome: 'farias',
    datadenacimento: new Date()
}];

// mt util quado temos typo bem grande ou
function trataFuncionarios(funcionarios: Funcionarios[]){
    // .....
    for (let funcionario of funcionarios){
        console.log('nome do funcionario', funcionario.nome)
    }
}
 

// ele ja fez uma inferencia de number 
// tsconfig ,jason
let altura: number | null = 1.6;
altura = null; 

type Contato = {
    nome:string;
    telefone1:string;
    telefone2?:string | null;
}
const contato: Contato = {
    nome:'vitor',
    telefone1:'131442412',
    telefone2: null,
}

// Type Assertion
// casting de outra linguagem "tratamento", para typescriot saber qual
// tipo de certa variavel
const minhaIdade:any = 23;
// tipo de variavel
// Type Assertion vai produzir um tipo NUMBER!!!! 
// NOS ASSEGURAMOS O TIPO DA VARIAVEL
(minhaIdade as number).toString();
//ou

// ou tambem podemos colocar como fizemos em cima
<number>minhaIdade.toString();

// pegamos do html document.getelementbyid pegamos o valor que ta no input
// fazemos um assert
const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);


// outra notacao para ASSERTION
const input2 =  <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);


