import { NodoListaLigada } from "./listaLIgada-entyti";

export class ListaLigada {

    primerNodo: NodoListaLigada | undefined;
    ultimoNodo: NodoListaLigada | undefined;

    constructor (primerNodo: NodoListaLigada | undefined) {
        this.primerNodo = primerNodo;
        this.ultimoNodo = primerNodo;
    }

    mostrarTodosLosNodos () {
        var nodoActual:NodoListaLigada | undefined = this.primerNodo;

        while (nodoActual != undefined) {
            nodoActual.mostrarValorGuardado();

            nodoActual = nodoActual.getSiguienteElemento();
        }
    }

    agregarNodo(nodoNuevo: NodoListaLigada){
        //Conecto el último nodo al nuevo nodo por agregar
        this.ultimoNodo?.setSiguienteElemento(nodoNuevo);

        //El nuevo nodo ahora sera el último nodo
        this.ultimoNodo = nodoNuevo;
    }

    agregarNodoAlFinal(nodoNuevo: NodoListaLigada) {
        if (this.ultimoNodo == undefined) {
            this.agregarNodo( nodoNuevo)
        }
    }
}


