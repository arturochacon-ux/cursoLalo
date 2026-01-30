
import { Linea } from "./linaDelMetro-entity";

export class ListasRutas {
    listaRutas: Linea[][]
    constructor () {
        this.listaRutas = []
    }

    agregarRuta(ruta: Linea[]) { 
        if (ruta != undefined) {
            this.listaRutas.push([...ruta]);
        }
    }

    mostrarRutas(){
        for (let i = 0; i < this.listaRutas.length; i++ ) {
            console.log("estas son todas las rutas que se encontraron " + this.listaRutas[i].length)
        }
    }

}

