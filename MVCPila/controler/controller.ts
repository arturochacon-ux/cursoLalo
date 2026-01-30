
import scanf from "scanf";
import { Linea } from "../entytis/linaDelMetro-entity";
import { Menu } from "../view/viasta";
import { lineasDelMetro } from "..";
import { ListasRutas } from "../entytis/listasRutas";
import { listaRutas } from "../entytis/prueba";

export class Control {
    menu = new Menu();
    estaciones: Map<number, Linea[]>;

    constructor(estaciones: Map<number, Linea[]>) {
        this.estaciones = estaciones;
    }

    iniciar() {
        this.menu.bienvenida();

        let opcion;

        do {
            this.menu.menuPrincipal();
            opcion = this.menu.entradaDeOpciones();

            switch (opcion) {
                case 1:
                    for (let [key] of this.estaciones) {
                        console.log("Linea " + key)
                    }
                    let lineaSeleccionada = this.estaciones.get(this.menu.seleccionDeEstacion())
                    let i = 1
                    if (lineaSeleccionada != undefined){
                       for(let contador of lineaSeleccionada){
                        console.log(i++ +"-." +" "+ contador.estacion)
                       }
                    }
                break;

                case 2:
                    console.log("en que linea te encuentras")
                    let inicio
                    let destino
                    for (let [key] of this.estaciones) {
                        console.log("Linea " + key)
                    }
                    let j = 1
                    let linea = this.estaciones.get(this.menu.seleccionDeEstacion())
                    if (linea != undefined){
                        for(let contador of linea){
                        console.log(j++ +"-." +" "+ contador.estacion)
                        }
                    }
                    let estacion = this.menu.ingresaEstacionUno()
                    let k = 1
                    let linea2 = this.estaciones.get(this.menu.seleccionDeEstacion())
                    if (linea2 != undefined){
                        for(let contador of linea2){
                        console.log(k++ +"-." +" "+ contador.estacion)
                        }
                    }
                    let estacion2 = this.menu.ingresaEstacionDos()

                    if (linea != undefined){
                        for(let indice = 0; indice< linea.length; indice ++){
                            if (estacion-1 == indice){
                                console.log("me encuentro en " + linea[indice].estacion)
                                inicio = linea[indice]

                            }
                        }
                    }

                    if (linea2 != undefined){
                        for(let indice = 0; indice< linea2.length; indice ++){
                            if (estacion2-1 == indice){
                                console.log("voy a " + linea2[indice].estacion)
                                destino = linea2[indice]

                            }
                        }
                    }

                    var posiblesRutas = new ListasRutas()
                    inicio?.mejorRuta(destino, new Array(), /*undefined,*/ new Map<string, Linea>(), posiblesRutas)
                    console.log("estas son las posibles rutas XD" )
                    posiblesRutas.mostrarRutas()

                break;

                case 0:
                    this.menu.despedida();
                break;

                default:
                    this.menu.error();
                break;
            }
        } while (opcion !== 0);
    }
}