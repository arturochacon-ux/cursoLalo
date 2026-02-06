
class NodosDoblementeEnlazados {
    valor: number;
    nodoSiguiente: NodosDoblementeEnlazados | undefined;

    constructor(valor: number) {
        this.valor = valor
    }

    mostrarValorGuardado() {
        console.log(`El valor guardado es: ${this.valor}`)
    }

    setSiguienteElemento(siguienteNodo: NodosDoblementeEnlazados | undefined) {
        this.nodoSiguiente = siguienteNodo;
    }

    getSiguienteElemento(): NodosDoblementeEnlazados | undefined {
        return this.nodoSiguiente;
    }

}

class ListaLigadaOrdenada {
    primerNodo: NodosDoblementeEnlazados | undefined;

    constructor(primerNodo: NodosDoblementeEnlazados | undefined) {
        this.primerNodo = primerNodo
    }

    agregarNodo(nuevoNodo: NodosDoblementeEnlazados) {
        /*if (this.primerNodo == undefined || nuevoNodo.valor < this.primerNodo.valor ){
            nuevoNodo.nodoSiguiente = this.primerNodo;
            this.primerNodo = nuevoNodo;
        }*/
        let nodoActual = this.primerNodo
        var nodoAnterior: undefined | NodosDoblementeEnlazados
        while (nodoActual != undefined && nodoActual.valor < nuevoNodo.valor) {
            //console.log("estoy dento del while")
            nodoAnterior = nodoActual
            nodoActual = nodoActual.nodoSiguiente
        }

        nodoAnterior?.setSiguienteElemento(nuevoNodo)
        nuevoNodo.setSiguienteElemento(nodoActual)
        //nuevoNodo.nodoSiguiente = nodoActual?.getSiguienteElemento()
        //nodoActual.nodoSiguiente = nuevoNodo;

    }

    mostrarTodosLosNodos() {
        var nodoActual = this.primerNodo;
        while (nodoActual != undefined) {
            nodoActual.mostrarValorGuardado();
            nodoActual = nodoActual.getSiguienteElemento();
        }
    }

    mostrarDeMayorAMenor() {
        console.log("Lista de mayor a menor:");
        let actual = this.primerNodo
        while (actual?.getSiguienteElemento()) {
            actual = actual.getSiguienteElemento();
        }
        while (actual != undefined) {
            actual.mostrarValorGuardado()
            actual = actual.getSiguienteElemento();
        }
    }
}

let miNodo = new NodosDoblementeEnlazados(1)
let segundo = new NodosDoblementeEnlazados(2)
let nueve = new NodosDoblementeEnlazados(9)
let miLista = new ListaLigadaOrdenada(segundo)
miLista.agregarNodo(nueve)
miLista.agregarNodo(miNodo)
miLista.agregarNodo(new NodosDoblementeEnlazados(15))
miLista.agregarNodo(new NodosDoblementeEnlazados(1))
miLista.agregarNodo(new NodosDoblementeEnlazados(7))
miLista.agregarNodo(new NodosDoblementeEnlazados(12))
miLista.agregarNodo(new NodosDoblementeEnlazados(3))
miLista.agregarNodo(new NodosDoblementeEnlazados(1))
miLista.agregarNodo(new NodosDoblementeEnlazados(0))
miLista.mostrarTodosLosNodos()
miLista.mostrarDeMayorAMenor()

/*
let miLista = new ListaLigadaOrdenada();
miLista.agregarNodo(new Nodo(5));
miLista.agregarNodo(new Nodo(2));
miLista.agregarNodo(new Nodo(9));
miLista.agregarNodo(new Nodo(4));
miLista.mostrarTodosLosNodos();

*/
