"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListasRutas = void 0;
var ListasRutas = /** @class */ (function () {
    function ListasRutas() {
        this.listaRutas = [];
    }
    ListasRutas.prototype.agregarRuta = function (ruta) {
        if (ruta != undefined) {
            this.listaRutas.push(__spreadArray([], ruta, true));
            console.log("se agrego" + ruta);
        }
    };
    ListasRutas.prototype.rutaMasCorta = function () {
        var rutaCorta;
        for (var i = 0; i < this.listaRutas.length; i++) {
            rutaCorta = this.listaRutas[i];
            if (rutaCorta.length < this.listaRutas[i].length) {
                rutaCorta = this.listaRutas[i];
            }
        }
        for (var _i = 0, rutaCorta_1 = rutaCorta; _i < rutaCorta_1.length; _i++) {
            var j = rutaCorta_1[_i];
            console.log("hola " + j.estacion);
        }
        return rutaCorta;
    };
    return ListasRutas;
}());
exports.ListasRutas = ListasRutas;
