
class listaRutasNodos {

    laMasLista: Punto[][];
    constructor() {
        this.laMasLista = [];
    }

    guardarLista(listaRutas: Punto[]): void {
        console.log("se esta agregando un nuvo elemento a la lista y es "+ listaRutas.length)
        this.laMasLista.push([...listaRutas])

        for(const i of listaRutas){
            console.log("mejor ruta " + i.nombre)
        }
    }

    mostrarRutas(){
       for(const j of this.laMasLista) {
        console.log("esta es una ruta posible")
        for (const k of j) {
            console.log(k.nombre)
        }
       }

    }
}

class Punto {
    nombre: number
    puntosColindantes: Punto[]
    listaencontradas = new listaRutasNodos();
    mapaMetro = new Map<number, object>
    constructor(nombre: number) {
        this.nombre = nombre
        this.puntosColindantes = []
        this.mapaMetro = new Map<number, object>
    }
    agregarPunto(dato: Punto) {
        this.puntosColindantes.push(dato)
        console.log("se ha agregado el punto " + dato.nombre)
    }

    eliminarPunto(dato: Punto) {
        for (let i = 0; i < this.puntosColindantes.length; i++) {
            if (dato == this.puntosColindantes[i]) {
                this.puntosColindantes.splice(i)
                console.log("se elimino el valor en la posicion " + i)
                break;
            }
        }
    }


    mejorRuta(voyA: Punto, miLista: Punto[], mapa: Map<number, Punto>, todasRutas:listaRutasNodos): Punto[] | undefined {
        if(mapa.has(this.nombre) == true) {
            console.log("ya me encuentro en la lista "+ this.nombre +" "+mapa.delete(this.nombre) )
        }
        miLista.push(this)
        mapa.set(this.nombre, this)

        if (this == voyA) {
            for (const i of miLista) {
                console.log("esta es la mejor ruta " + i.nombre)
            }
            console.log(miLista.length)
            todasRutas.guardarLista([...miLista])
            return 
        }

        for (let i = 0; i < this.puntosColindantes.length; i++) {
            console.log("me encuentro en " + this.puntosColindantes[i].nombre)
            let nodo = this.puntosColindantes[i]
            if(nodo !== undefined ){
                nodo.mejorRuta(voyA, miLista, mapa, todasRutas)
            }
        }

        miLista.pop()
        mapa.delete(this.nombre)
        return miLista

    }


}


//La ultima y definitiva con recursividad es me encuentro en un nodo tal y y recorro su lista de nodos que tiene alrededor, por valida que sea igual al dato que se esta buscando sis imprime un mensaje de lo contrario validar que tenga una lista de nodos adyacentes de ser asíi guardarla dentro de una lista  de lo contrario no guardar en la lista de tipo cola eso  lo va a guardar se va a devolver cuando  y también se le tiene que hacer pasar una parámetro del tipo lista
let nuevoPunto = new Punto(1)
let puntoDos = new Punto(2)
let puntoTres = new Punto(3)
let puntoCuatro = new Punto(4)
let puntoCinco = new Punto(5)
let puntoSeis = new Punto(6)
let puntoSiete = new Punto(7)
let puntoOcho = new Punto(8)
let puntoNueve = new Punto(9)
let puntoDies = new Punto(10)


nuevoPunto.agregarPunto(puntoDos);
nuevoPunto.agregarPunto(puntoCinco)
nuevoPunto.agregarPunto(puntoSeis)
nuevoPunto.agregarPunto(puntoTres)

puntoDos.agregarPunto(puntoTres)
puntoDos.agregarPunto(puntoCuatro)
puntoDos.agregarPunto(puntoCinco)

puntoCuatro.agregarPunto(puntoTres)
puntoCuatro.agregarPunto(puntoSeis)


puntoCinco.agregarPunto(puntoOcho)
//puntoCinco.agregarPunto(puntoDos)
puntoCinco.agregarPunto(puntoSeis)
puntoSeis.agregarPunto(nuevoPunto)

console.log(puntoSiete.puntosColindantes)
let miMapa = new Map<number, Punto>
let lista = []
let miListaRutas = new listaRutasNodos()
nuevoPunto.mejorRuta(puntoSeis, lista, miMapa, miListaRutas)

console.log (" esto es una prueba ")
miListaRutas.mostrarRutas()
/*
domine driver disaning
ddd

modelado del dominio (base de datos)
*/

