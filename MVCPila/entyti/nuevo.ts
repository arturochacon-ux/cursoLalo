/*
export class NodoDoblementeLigado {

    valorNodo: any;

    private siguienteElementoEnLista: NodoDoblementeLigado | undefined = undefined;
    private anteriorElementoEnLista: NodoDoblementeLigado | undefined = undefined;

    constructor(anteriorElementoEnLista: NodoDoblementeLigado | undefined, valorNodo: any, siguienteElementoEnLista: NodoDoblementeLigado | undefined) {
        this.siguienteElementoEnLista = siguienteElementoEnLista;
        this.valorNodo = valorNodo;
        this.anteriorElementoEnLista = anteriorElementoEnLista
    }
    
    setAnteriorElemento(anteriorElemento: NodoDoblementeLigado | undefined) {
        this.anteriorElementoEnLista = anteriorElemento
    }

    getAnteriorElemento(): NodoDoblementeLigado | undefined {
        return this.anteriorElementoEnLista
    }


    setSiguienteElemento(siguienteElementoEnLista: NodoDoblementeLigado | undefined) {
        this.siguienteElementoEnLista = siguienteElementoEnLista;
    }

    getSiguienteElemento(): NodoDoblementeLigado | undefined {
        return this.siguienteElementoEnLista;
    }

    mostrarValorGuardado() {
        console.log(`El valor guardado es: ${this.valorNodo}`)
    }
}

class MiListaDoble {
    
    posicionActual: NodoDoblementeLigado | undefined = undefined;
    primerNodo: NodoDoblementeLigado | undefined = undefined;
    ultimaPosicion: NodoDoblementeLigado | undefined = undefined;
    
    agregarNodo(nodoAgregar: NodoDoblementeLigado) {
        this.posicionActual = this.primerNodo
        let siguienteNodo: undefined | NodoDoblementeLigado
        while(this.posicionActual != undefined && this.posicionActual < nodoAgregar){
            siguienteNodo = this.posicionActual
            this.posicionActual = this.posicionActual.getSiguienteElemento()
        }
        siguienteNodo?.setSiguienteElemento(nodoAgregar)
        nodoAgregar.setSiguienteElemento( this.posicionActual)
    }

    mostrarLista (){
        this.posicionActual = this.primerNodo;
        while(this.posicionActual != undefined){
            this.posicionActual?.mostrarValorGuardado()
            this.posicionActual = this.posicionActual.getSiguienteElemento()
        }
    }

}



class NodoFecha {
    fecha: Date = new Date()
    private siguienteNodo: NodoFecha | undefined;

    constructor(fecha: Date) {
        this.fecha = fecha
    }

    mostrarFecha() {
        console.log("La fecha es: " + this.fecha.toDateString())
    }

    setSigienteNodo(nuevoSiguienteNodo: NodoFecha | undefined) {
        this.siguienteNodo = nuevoSiguienteNodo
    }

    getSiguienteNodo(): NodoFecha | undefined {
        return this.siguienteNodo
    }
}

class listaDeFechas {
    primernodo: NodoFecha | undefined;

    constructor(primerNodo: NodoFecha | undefined) {
        this.primernodo = primerNodo
    }

    agregarNodo(nuevoNodo: NodoFecha) {
        if (this.primernodo == undefined) {
            this.primernodo = nuevoNodo
            return
        }

        let nodoIndice = this.primernodo
        let anteriorNodo: NodoFecha | undefined

        while (nodoIndice != undefined && nodoIndice.fecha < nuevoNodo.fecha) {
            anteriorNodo = nodoIndice
            nodoIndice = nodoIndice.getSiguienteNodo()
        }
        if (anteriorNodo == undefined) {
            nuevoNodo.setSigienteNodo(this.primernodo)
            this.primernodo = nuevoNodo
        } 
        else {
            anteriorNodo.setSigienteNodo(nuevoNodo)
            nuevoNodo.setSigienteNodo(nodoIndice)
        }
    }

    mostrar() {
        let nodoActual = this.primernodo
        while (nodoActual != undefined) {
            nodoActual.mostrarFecha()
            nodoActual = nodoActual.getSiguienteNodo()
        }
    }
}

let mifecha = new NodoFecha(new Date(2022, 8, 15))  
let mi2fecha = new NodoFecha(new Date(2020, 2, 20)) 
let mi3fecha = new NodoFecha(new Date(2025, 0, 22))

let miLista = new listaDeFechas(mi2fecha)
miLista.agregarNodo(mifecha)
miLista.agregarNodo(mi3fecha)

miLista.mostrar()
*/

function agregarr {

}