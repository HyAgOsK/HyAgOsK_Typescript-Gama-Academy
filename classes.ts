class Data{
    //public dia:number;
    //mes:number;
    ano:number;

    constructor(public dia: number, public mes :number,ano:number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(4,6,1089);
console.log(data.dia);

// quero so passar dia e mes e o ano defout

const data2 = new Data(1,1);
// nao precisa fazer if == nulll

//nao conseguimos usar somente o javascript 
class Carro{
    private  velocidadeatual:number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220,
    ){}

    private alterarVelocidade(delta: number){
        // delta eu verifico tudo aqui agora como se ele vai ficar
        //maior ou menor
        //this.velocidadeatual = xxx
        const novaVelocidade = this.velocidadeatual + delta;
        if(novaVelocidade>= 0 && novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeatual = novaVelocidade;
        }else{
            this.velocidadeatual = delta > 0 ? this.velocidadeMaxima:0
        }


    }
    acelerar(){
        //const aceleracao = 5;
        this.alterarVelocidade(5);

        // vai acelera ate o infinito
        /*if(this.velocidadeatual + aceleracao <= this.velocidadeMaxima){    
            this.velocidadeatual += aceleracao;
       }*/

    }
    // se quiser frear tambem podemos
    frear(){
        //const frenar = 5;
        /*if(this.velocidadeatual != 0){
            this.velocidadeatual -= frenar;
        }*/
        this.alterarVelocidade(-5);
    }
}
const carro = new Carro('chevrolet', 'prisma',230);
carro.acelerar()
carro.frear()
// class Camaro
// HERANCA

class Camaro extends Carro{
    private turbo = false;
    constructor(){
        super('Chevrolet','camaro',500);
    }
    ligarTurbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
