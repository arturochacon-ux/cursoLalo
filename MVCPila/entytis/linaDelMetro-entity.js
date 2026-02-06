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
exports.Linea = void 0;
var Linea = /** @class */ (function () {
    function Linea(estacion) {
        this.estacion = estacion;
        this.colindaCon = [];
    }
    Linea.prototype.agregarEstacion = function (estacionVecina) {
        this.colindaCon.push(estacionVecina);
    };
    Linea.prototype.mostrarEstacion = function () {
        for (var _i = 0, _a = this.colindaCon; _i < _a.length; _i++) {
            var contador = _a[_i];
            console.log(contador.estacion);
        }
    };
    Linea.prototype.mejorRuta = function (voyA, pila, hashmap, posiblesRutas) {
        if (hashmap.has(this.estacion) == true) {
            return;
        }
        pila.push(this);
        hashmap.set(this.estacion, this);
        if (this === voyA) {
            for (var _i = 0, pila_1 = pila; _i < pila_1.length; _i++) {
                var contador = pila_1[_i];
                console.log(contador.estacion);
            }
            posiblesRutas.agregarRuta(__spreadArray([], pila, true));
        }
        else {
            for (var contador = 0; contador < this.colindaCon.length; contador++) {
                var nodo = this.colindaCon[contador];
                if (nodo != undefined) {
                    nodo.mejorRuta(voyA, pila, hashmap, posiblesRutas);
                }
            }
        }
        pila.pop();
        hashmap.delete(this.estacion);
        return;
    };
    return Linea;
}());
exports.Linea = Linea;
