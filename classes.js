"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(4, 6, 1089);
console.log(data.dia);
// quero so passar dia e mes e o ano defout
var data2 = new Data(1, 1);
// nao precisa fazer if == nulll
//nao conseguimos usar somente o javascript 
