import { lineasMetro } from "../doc";
import { Linea } from "./linaDelMetro-entity";

export class ControlerMapa{
    estaciones = lineasMetro

    todasLasLaves(){
        for(let [key] of this.estaciones) {
            console.log("Linea " + key)
        }

    }

    getAllEstaciones(key: number): Linea[] | undefined{
        return this.estaciones.get(key)
    }

    buscadorEstacion(key: number, estacion : number): Linea | undefined{
        let linea = this.getAllEstaciones(key)
        if (linea) {
        for (let i = 0; i < linea.length; i++){
            if (estacion-1 == i ){
                return linea[i]
            }
        }
    }
    }
}