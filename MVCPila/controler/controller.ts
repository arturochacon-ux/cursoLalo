
import scanf from "scanf";
import { Linea } from "../entytis/linaDelMetro-entity";
import { Menu } from "../view/viasta";
import { ListasRutas } from "../entytis/listasRutas"
export class Control {

    menu = new Menu();
    
    iniciar() {
        this.menu.bienvenida();

        let opcion;

        do {
            this.menu.menuPrincipal();
            opcion = this.menu.entradaDeOpciones();

            switch (opcion) {
                case 1:
                    this.menu.seleccionDeEstacion()
                    break;

                case 2:

                    let inicio = this.menu.ingresaEstacionUno()
                    let destino = this.menu.ingresaEstacionDos()
                    if (destino) {
                        console.log("estoy en " + inicio?.estacion + " y voy a " + destino?.estacion)
                        var posiblesRutas = new ListasRutas()
                        inicio?.mejorRuta(destino, new Array(), new Map<string, Linea>(), posiblesRutas)
                        posiblesRutas.rutaMasCorta()
                    }

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