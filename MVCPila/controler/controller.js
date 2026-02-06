"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = void 0;
var viasta_1 = require("../view/viasta");
var listasRutas_1 = require("../entytis/listasRutas");
var Control = /** @class */ (function () {
    function Control(estaciones) {
        this.menu = new viasta_1.Menu();
        this.estaciones = estaciones;
    }
    Control.prototype.iniciar = function () {
        this.menu.bienvenida();
        var opcion;
        do {
            this.menu.menuPrincipal();
            opcion = this.menu.entradaDeOpciones();
            switch (opcion) {
                case 1:
                    for (var _i = 0, _a = this.estaciones; _i < _a.length; _i++) {
                        var key = _a[_i][0];
                        console.log("Linea " + key);
                    }
                    var lineaSeleccionada = this.estaciones.get(this.menu.seleccionDeEstacion());
                    var i = 1;
                    if (lineaSeleccionada != undefined) {
                        for (var _b = 0, lineaSeleccionada_1 = lineaSeleccionada; _b < lineaSeleccionada_1.length; _b++) {
                            var contador = lineaSeleccionada_1[_b];
                            console.log(i++ + "-." + " " + contador.estacion);
                        }
                    }
                    break;
                case 2:
                    console.log("en que linea te encuentras");
                    var inicio = void 0;
                    var destino = void 0;
                    for (var _c = 0, _d = this.estaciones; _c < _d.length; _c++) {
                        var key = _d[_c][0];
                        console.log("Linea " + key);
                    }
                    var j = 1;
                    var linea = this.estaciones.get(this.menu.seleccionDeEstacion());
                    if (linea != undefined) {
                        for (var _e = 0, linea_1 = linea; _e < linea_1.length; _e++) {
                            var contador = linea_1[_e];
                            console.log(j++ + "-." + " " + contador.estacion);
                        }
                    }
                    var estacion = this.menu.ingresaEstacionUno();
                    var k = 1;
                    var linea2 = this.estaciones.get(this.menu.seleccionDeEstacion());
                    if (linea2 != undefined) {
                        for (var _f = 0, linea2_1 = linea2; _f < linea2_1.length; _f++) {
                            var contador = linea2_1[_f];
                            console.log(k++ + "-." + " " + contador.estacion);
                        }
                    }
                    var estacion2 = this.menu.ingresaEstacionDos();
                    if (linea != undefined) {
                        for (var indice = 0; indice < linea.length; indice++) {
                            if (estacion - 1 == indice) {
                                console.log("me encuentro en " + linea[indice].estacion);
                                inicio = linea[indice];
                            }
                        }
                    }
                    if (linea2 != undefined) {
                        for (var indice = 0; indice < linea2.length; indice++) {
                            if (estacion2 - 1 == indice) {
                                console.log("voy a " + linea2[indice].estacion);
                                destino = linea2[indice];
                            }
                        }
                    }
                    var posiblesRutas = new listasRutas_1.ListasRutas();
                    inicio === null || inicio === void 0 ? void 0 : inicio.mejorRuta(destino, new Array(), /*undefined,*/ new Map(), posiblesRutas);
                    console.log("estas son las posibles rutas XD");
                    console.log(posiblesRutas.rutaMasCorta());
                    break;
                case 0:
                    this.menu.despedida();
                    break;
                default:
                    this.menu.error();
                    break;
            }
        } while (opcion !== 0);
    };
    return Control;
}());
exports.Control = Control;
