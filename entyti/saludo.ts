
class Estacion{
    
    fecha: any
    private siguienteNodo: Estacion | undefined;
    private anteriorNodo: Estacion | undefined;

    constructor(fecha: Date){
        this.fecha = fecha
    }

    mostrarFecha(){ 
        console.log( "La fecha es " + this.fecha)
    }
    setSigienteNodo(nuevoSiguienteNodo: Estacion | undefined) {
        this.siguienteNodo = nuevoSiguienteNodo
    }
    getSiguienteNodo(): Estacion | undefined {
        return this.siguienteNodo 
    }
    setAnteriorNodo(nuevoAnteriorNodo: Estacion | undefined) {
        this.anteriorNodo = nuevoAnteriorNodo
    }
    getAnteriorNodo(): Estacion | undefined {
        return this.anteriorNodo
    }
}

class listaDeFechas {
    primernodo: Estacion | undefined;
    ultimoNodo: Estacion | undefined

    constructor(primerNodo: Estacion | undefined) {
        this.primernodo = primerNodo
        this.ultimoNodo = primerNodo
    }

    agregarNodo(nuevoNodo: Estacion) {
        let nodoIndice = this.primernodo
        let anteriorNodo: Estacion | undefined

        while (nodoIndice != undefined && nodoIndice.fecha < nuevoNodo.fecha) {
            anteriorNodo = nodoIndice
            nodoIndice = nodoIndice.getSiguienteNodo()
        }
        if (anteriorNodo == undefined) {
            nuevoNodo.setSigienteNodo(this.primernodo)
            this.primernodo?.setAnteriorNodo(nuevoNodo)
            this.primernodo = nuevoNodo
        } 
        else {
            anteriorNodo.setSigienteNodo(nuevoNodo)
            nuevoNodo.setSigienteNodo(nodoIndice)
            nuevoNodo.setAnteriorNodo(anteriorNodo)
        }
        if (nodoIndice != undefined) {
            nodoIndice.setAnteriorNodo(nuevoNodo);
        }
    }

    mostrarAlrevez() {
        let nodoActual = this.ultimoNodo
        while (nodoActual != undefined){
            nodoActual.mostrarFecha()
            nodoActual = nodoActual.getAnteriorNodo()
        }
    }

    mostrar() {
        let nodoActual = this.primernodo
        while (nodoActual != undefined) {
            nodoActual.mostrarFecha()
            nodoActual = nodoActual.getSiguienteNodo()
        }
    }

    buscador(buscar: Date): number | undefined {
        let nodoActual = this.primernodo
        let contador = 0
        while (nodoActual != undefined ) {
            if (nodoActual?.fecha.getTime() === buscar.getTime()){
                return contador
            }
            contador++
            nodoActual = nodoActual.getSiguienteNodo()
            
        }
    }
    
    espacioEntreNodos(dato1: Date, dato2: Date) {
        let posicion1 = this.buscador(dato1)
        let posicion2 = this.buscador(dato2)
        let espacioEntreEllos = 0
        if (posicion1 == undefined || posicion2 == undefined) {
            console.log("no se encontro el valor " + posicion1 + " y " + posicion2)
        }else if(posicion1 < posicion2) {
            espacioEntreEllos = posicion2 - posicion1
            console.log("el espacio entre los dos nodos es: " + espacioEntreEllos)
        }else {
            espacioEntreEllos = posicion1 - posicion2
            console.log ("el espacio entr ellos es de: " + espacioEntreEllos + " nodos")
        }
    }
}


let mifecha1 = new Estacion(new Date(2023, 8, 15))
let mifecha = new Estacion(new Date(2022, 8, 15))  
let mi2fecha = new Estacion(new Date(2020, 2, 20)) 
let mi3fecha = new Estacion(new Date(2025, 0, 22))
let m4ifecha = new Estacion(new Date(2000, 0, 22))
let mi5fecha = new Estacion(new Date(1999, 9, 15))
let mi6fecha = new Estacion(new Date(2004, 7, 10))

let miLista = new listaDeFechas(mi3fecha)
miLista.agregarNodo(mifecha)
miLista.agregarNodo(mifecha1)
miLista.agregarNodo(mi2fecha)
miLista.agregarNodo(m4ifecha)
miLista.agregarNodo(mi5fecha)
miLista.agregarNodo(mi6fecha)
let dato = new Date(2000, 0, 22)
miLista.mostrar()
miLista.mostrarAlrevez()
miLista.espacioEntreNodos(mi5fecha.fecha, mifecha.fecha)
