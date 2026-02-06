
import scanf from "scanf";
import { Linea } from "../entytis/linaDelMetro-entity";
import { Menu } from "../view/viasta";
import { ListasRutas } from "../entytis/listasRutas"
import { Creador } from "../doc";
import { lineasMetro } from "../doc";
export class Control {

    menu = new Menu();
    todasEstaciones = new Creador(lineasMetro)
    
    iniciar() {
        this.menu.bienvenida();
        this.todasEstaciones.creaobjetos()
        this.todasEstaciones.conectaEstaciones()
        

        let opcion;

        do {
            this.menu.menuPrincipal();
            opcion = this.menu.entradaDeOpciones();
            this.todasEstaciones.mostrarEstaciones()

            switch (opcion) {
                case 1:
                    this.todasEstaciones.inprimeLlaves()
                    let linea = this.menu.seleccionEstaciones()
                    let estaciones = this.todasEstaciones.getEstaciones(linea)
                    for (let i = 0; i< estaciones?.length; i++){
                        console.log(i+1 + "-. " + estaciones[i])
                    }
                    
                    break;

                case 2:
                    this.todasEstaciones.inprimeLlaves()
                    let estoyLinea = this.menu.seleccionLinea()
                    let esta = this.todasEstaciones.getEstaciones(estoyLinea)
                    if (esta){
                    for (let i = 0; i< esta?.length; i++){
                        console.log(i+1 + "-. " + esta[i])
                    }
                    }
                    let numeroLinea = this.menu.seleccionEstacion()
                    let linea2 = this.menu.seleccionLineaDestino()
                    let estaciones2 = this.todasEstaciones.getEstaciones(linea2)
                    for (let i = 0; i< estaciones2?.length; i++){
                        console.log(i+1 + "-. " + estaciones2[i])
                    } 
                    let estacion2 = this.menu.seleccionEstacionDestino()
                    let key = this.todasEstaciones.buscadorEstacion(estoyLinea, numeroLinea)
                    let key2 = this.todasEstaciones.buscadorEstacion(linea2, estacion2)
                    console.log("estoy en la estacion " + key + " y voy a " + key2)

                    let posiblesRutas = new ListasRutas()
                    this.todasEstaciones.obtenObjeto(key)?.mejorRuta(this.todasEstaciones.obtenObjeto(key2), new Array(), new Map<string, Linea>(), posiblesRutas)
                    console.log("esta es la mejor rutaaaa XD" )
                    posiblesRutas.rutaMasCorta()
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

