
import { Linea } from "./linaDelMetro-entity";

export class ListasRutas {
    listaRutas: Linea[][]
    constructor() {
        this.listaRutas = []
    }

    agregarRuta(ruta: Linea[]) {
        if (ruta) {
            this.listaRutas.push([...ruta])
        }
    }

    rutaMasCorta(): Linea[] {
        let rutaCorta = this.listaRutas[0]
        for (let i = 0; i < this.listaRutas.length; i++) {
            if (this.listaRutas[i].length < rutaCorta.length) {
                rutaCorta = this.listaRutas[i]
            }
        }
        for (let h of rutaCorta){
            console.log(h.estacion)
        }
        return rutaCorta
    }


}

