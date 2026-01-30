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
            console.log(contador.estacion)
    }

    mejorRuta(voyA: Linea, pila: Linea[], estacionAanterior: Linea, hashmap: Map<string, Linea>, posiblesRutas: ListasRutas): Linea[] {

        if (hashmap.has(this.estacion)) {
            return pila;
        }
        pila.push(this);
        hashmap.set(this.estacion, this);

        if (this === voyA) {
            for (let contador of pila) {
                console.log(contador.estacion);
            }
            posiblesRutas.agregarRuta(pila)
            return pila;
        }

        for (let contador = 0; contador < this.colindaCon.length; contador++) {
            let estacionSiguiente = this.colindaCon[contador];
            if (estacionSiguiente.estacion !== estacionAanterior?.estacion) {
                let resultado = estacionSiguiente.mejorRuta(voyA, pila, this, hashmap, posiblesRutas);
                if (resultado.at(resultado.length - 1) == voyA) {
                    //guardaRutas.agregarRuta(resultado)
                    return resultado;
                }
            }
        }
        pila.pop();
        hashmap.delete(this.estacion);
        posiblesRutas.agregarRuta(pila)
        return pila;

    }



}