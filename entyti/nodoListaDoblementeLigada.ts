import { NodoListaDoblementeLigada } from "./listaDoblementeLigada";

export class ListaDoblementeLigada {

    primerNodo: NodoListaDoblementeLigada | undefined;
    ultimoNodo: undefined | NodoListaDoblementeLigada;

    constructor (primerNodo: NodoListaDoblementeLigada | undefined, ultimoNodo: NodoListaDoblementeLigada | undefined) {
        this.primerNodo = primerNodo;
        this.ultimoNodo = ultimoNodo;
    }

    mostrarTodosLosNodos () {
        var nodoActual:NodoListaDoblementeLigada | undefined = this.primerNodo;
        var nodoSiguiente: NodoListaDoblementeLigada | undefined = this.ultimoNodo

        while (nodoActual != undefined) {
            nodoActual.mostrarValorGuardado();

            nodoActual = nodoActual.getSiguienteElemento();
        }

        while (nodoSiguiente != undefined) {
            nodoSiguiente?.mostrarValorGuardado();

            nodoSiguiente = nodoSiguiente.getAnteriorElemento()
        }
    }
        
    recorrerNodosDeInicioAFin () {
        var nodoActual:NodoListaDoblementeLigada | undefined = this.primerNodo;
              while (nodoActual != undefined) {
            nodoActual.mostrarValorGuardado();

            nodoActual = nodoActual.getSiguienteElemento();
        }
    }

    recorrerNodosFinAInicio () {
        var nodoAnterior: NodoListaDoblementeLigada | undefined = this.ultimoNodo

         while (nodoAnterior != undefined) {
            nodoAnterior?.mostrarValorGuardado();

            nodoAnterior = nodoAnterior.getAnteriorElemento()
        }
    }

    agregarAlPrincipio(nuevoNodo: NodoListaDoblementeLigada){
        this.primerNodo?.setAnteriorElemento(nuevoNodo) 
        nuevoNodo.setSiguienteElemento(this.primerNodo)
        this.primerNodo = nuevoNodo
    }

    agregarAlFinal(nodoFinal: NodoListaDoblementeLigada) {
        // se declara el ultimo nodo y con el metodo siguiente ellemento se agrega el elemanto que se quiere oner al final
        this.ultimoNodo?.setSiguienteElemento(nodoFinal)
        // el nodo es el que agregamos y decimos que el valore anterior al nodo final actual es el unlimo que estaba
        nodoFinal.setAnteriorElemento(this.ultimoNodo)
        // aqui declaramos que el ultimo nodo es el nodo es el que queremos que este al final
        this.ultimoNodo = nodoFinal
    }
}



const omar = new NodoListaDoblementeLigada(undefined, "omar", undefined);
const monica = new NodoListaDoblementeLigada(undefined, "monica", undefined);
const liz = new NodoListaDoblementeLigada(undefined, "liz", undefined);
const arturo = new NodoListaDoblementeLigada(undefined, "arturo", undefined);
const cesar = new NodoListaDoblementeLigada(undefined, "cesar", undefined);
const lalo = new NodoListaDoblementeLigada(undefined, "lalo", undefined);


/*
lalo.setAnteriorElemento(undefined);
lalo.setSiguienteElemento(cesar)

cesar.setSiguienteElemento(arturo)
cesar.setAnteriorElemento(lalo);

arturo.setSiguienteElemento(liz)
arturo.setAnteriorElemento(cesar);

liz.setSiguienteElemento(monica)
liz.setAnteriorElemento(arturo);

monica.setSiguienteElemento(undefined)
monica.setAnteriorElemento(liz)
*/
const lista = new ListaDoblementeLigada(lalo, lalo);
lista.agregarAlPrincipio(omar)
lista.agregarAlFinal(cesar)
lista.recorrerNodosDeInicioAFin();