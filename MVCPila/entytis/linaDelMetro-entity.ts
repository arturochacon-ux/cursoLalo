import { ListasRutas } from "./listasRutas";

export class Linea {
    estacion: string
    colindaCon: Linea[]

    constructor(estacion: string) {
        this.estacion = estacion;
        this.colindaCon = [];

    }
    agregarEstacion(estacionVecina: Linea) {
        this.colindaCon.push(estacionVecina)
    }

    mostrarEstacion() {
        for (let contador of this.colindaCon)
            console.log(contador.estacion )
    }

    mejorRuta(voyA: Linea, pila: Linea[], hashmap: Map<string, Linea>, posiblesRutas: ListasRutas) {

        if (hashmap.has(this.estacion) == true) {
            return
        }
        pila.push(this);
        hashmap.set(this.estacion, this);

        if (this === voyA) {
        posiblesRutas.agregarRuta([...pila])
        } else {

            for (let contador = 0; contador < this.colindaCon.length; contador++) {
                let nodo = this.colindaCon[contador]
                if (nodo) {
                    nodo.mejorRuta(voyA, pila, hashmap, posiblesRutas)
                }

            }


        }
        pila.pop();
        hashmap.delete(this.estacion);
        return

    }



}