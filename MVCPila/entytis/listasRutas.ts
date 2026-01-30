
import { Linea } from "./linaDelMetro-entity";

export class ListasRutas {
    listaRutas: Linea[][]
    constructor () {
        this.listaRutas = []
    }

    agregarRuta(ruta: Linea[]) { 
        if (ruta != undefined) {
            this.listaRutas.push([...ruta]);
            console.log("se agrego" + ruta)
        }
    }

    rutaMasCorta(): Linea[] {
        let rutaCorta
        for (let i =0; i < this.listaRutas.length; i++){
            rutaCorta = this.listaRutas[i]
            if(rutaCorta.length < this.listaRutas[i].length){
                rutaCorta = this.listaRutas[i]
                
            }
        }
        for(const j of rutaCorta){
            console.log("hola "+j.estacion)
        }
        return rutaCorta
    }
    

}

