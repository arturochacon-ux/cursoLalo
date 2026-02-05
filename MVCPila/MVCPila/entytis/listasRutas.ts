
import { Linea } from "./linaDelMetro-entity";

export class ListasRutas {
    listaRutas: Linea[][]
    constructor () {
        this.listaRutas = []
    }

    agregarRuta(ruta: Linea[]) { 
        if (ruta != undefined) {
            this.listaRutas.push([...ruta]);
            console.log(ruta)
        }
    }

    rutaMasCorta() {
        let rutaCorta
        for (let i =0; i < this.listaRutas.length; i++){
            rutaCorta = this.listaRutas[i]
            console.log(this.listaRutas[i].length)
            if(this.listaRutas[i].length < rutaCorta.length){
                rutaCorta = this.listaRutas[i]
                
            }
        }
        for(const j of rutaCorta){
            console.log(j.estacion)
        }
    }
    

}

