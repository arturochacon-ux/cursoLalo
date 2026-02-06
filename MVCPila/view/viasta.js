"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var scanf_1 = require("scanf");
var validacion_entyti_1 = require("../../MVC/entytis/validacion-entyti");
var Menu = /** @class */ (function () {
    function Menu() {
        this.validaciones = new validacion_entyti_1.Validacion();
    }
    Menu.prototype.bienvenida = function () {
        console.log("\nBienvenido");
    };
    Menu.prototype.menuPrincipal = function () {
        console.log("\n¿Qué quieres hacer?");
        console.log("1-. Ver todas las estaciones de una linea");
        console.log("2-. Calcular ruta entre estaciones");
        console.log("0-. Salir");
    };
    Menu.prototype.entradaDeOpciones = function () {
        var numero = this.validaciones.validarSoloNumeros((0, scanf_1.default)("%d"));
        while (numero == undefined) {
            console.log("Marca una opción valida");
            numero = this.validaciones.validarSoloNumeros((0, scanf_1.default)("%d"));
        }
        return numero;
    };
    Menu.prototype.seleccionDeEstacion = function () {
        console.log("Ingrese el numero de la linea que le interese");
        var key = this.entradaDeOpciones();
        console.log("Estas son todas las estaciones:");
        return key;
    };
    Menu.prototype.mostrar = function () {
        console.log("Estas son todas las estaciones:");
    };
    Menu.prototype.ingresaEstacionUno = function () {
        console.log("Ingresa el numero de la estación donde te encuentras:");
        var estoyEn = this.entradaDeOpciones();
        return estoyEn;
    };
    Menu.prototype.ingresaEstacionDos = function () {
        console.log("Ingresa el número de la estación a la que vas:");
        var vamosA = this.entradaDeOpciones();
        console.log("\nBuscando la mejor ruta...\n");
        return vamosA;
    };
    Menu.prototype.error = function () {
        console.log("Ingrese una opcion válida.");
    };
    Menu.prototype.despedida = function () {
        console.log("\nAdiós...");
    };
    return Menu;
}());
exports.Menu = Menu;
