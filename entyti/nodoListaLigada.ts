import { NodoListaLigada } from "./listaLIgada-entyti";

export class ListaLigada {

    primerNodo: NodoListaLigada | undefined;

    constructor (primerNodo: NodoListaLigada | undefined) {
        this.primerNodo = primerNodo;
    }

    mostrarTodosLosNodos () {
        var nodoActual:NodoListaLigada | undefined = this.primerNodo;

        while (nodoActual != undefined) {
            nodoActual.mostrarValorGuardado();

            nodoActual = nodoActual.getSiguienteElemento();
        }
    }
}


var omar = new NodoListaLigada(`omar`, undefined);
var monica = new NodoListaLigada(`monica`, undefined);
var liz = new NodoListaLigada(`liz`, undefined);
var arturo = new NodoListaLigada(`arturo`, undefined);
var cesar = new NodoListaLigada(`cesar`, undefined);
var lalo = new NodoListaLigada(`lalo`, undefined);

omar.setSiguienteElemento(lalo);
lalo.setSiguienteElemento(cesar);
cesar.setSiguienteElemento(arturo);
arturo.setSiguienteElemento(liz);
liz.setSiguienteElemento(monica);

var listaLigada = new ListaLigada(omar);
listaLigada.mostrarTodosLosNodos();
