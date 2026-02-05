"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validacion = void 0;
var scanf_1 = require("scanf");
var Validacion = /** @class */ (function () {
    function Validacion() {
    }
    Validacion.prototype.validarSoloNumeros = function (num) {
        while (Number.isNaN(num)) {
            console.log("El valor no puede contener letras. Intenta de nuevo: ");
            num = (0, scanf_1.default)("%d");
        }
        return num;
    };
    return Validacion;
}());
exports.Validacion = Validacion;
