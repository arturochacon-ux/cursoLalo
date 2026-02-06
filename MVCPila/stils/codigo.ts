export class NodoGrafo {
    valor: number;

    nodosVecinos: NodoGrafo[];

    constructor(valor: number) {
        this.valor = valor;
        this.nodosVecinos = [];
    }

    agregarNodoVecino(nodo: NodoGrafo) {
        this.nodosVecinos.push(nodo);
    }

    mostrarNodosVecinos() {

        console.log('\nEL nodo es: ' + this.valor + ' y sus NODOS vecinos son:')

        this.nodosVecinos.forEach(nodo => {
            nodo.mostrarDetalles();
        });
    }

    mostrarDetalles () {
        console.log('El valor es: ' + this.valor)
    }

    encontrarMejorRuta(valorABuscar: number, pilaRuta: NodoGrafo[], nodoAnterior?: NodoGrafo): NodoGrafo[] {
        //1.- Agregamos el nodo actual 
        pilaRuta.push(this);
        console.log(`Push: ${this.valor}`)

        //2.-Validamos si hemos encontrado el valor a buscar
        if (this.valor == valorABuscar) {
            //2.1
            //En caso de encontrarlo, imprimir la ruta
            console.log(`Ruta encontrada!! El mejor camino es: `);
            pilaRuta.forEach((nodo) => {
                console.log(`Estacion: ${nodo.valor}`)
            });

            return pilaRuta;
        }

        //3. Recorremos el arreglo de TODOS los vecinos
        for (var posicion = 0; posicion < this.nodosVecinos.length; posicion++) {

            //Creamos una variable para el vecino de la iteracion actual
            var nodoSiguiente = this.nodosVecinos[posicion];

            console.log(`Vecino de ${this.valor}: No. ${nodoSiguiente.valor}`)

            //3.1 Comparamos el nodoSiguiente con el nodoAnterior para 
            if (nodoSiguiente.valor != nodoAnterior?.valor) {
                //3.2 Llamamos al mismo metodo
                pilaRuta = nodoSiguiente.encontrarMejorRuta(valorABuscar, pilaRuta, this);

                /*
                var arreglo = [1, 3, 4];

                arreglo[1]
                pilaRuta.at(1);

                arreglo[arreglo.length -1]
                pilaRuta.at(pilaRuta.length - 1);*/

                //3.2Comparamos que aun no hayamos encontrado el valor a buscar (Que seria el último elemento de la fila)
                if (pilaRuta.at(pilaRuta.length - 1)?.valor == valorABuscar) {
                    return pilaRuta;
                }
            }
        }
        console.log(`Pop: ${pilaRuta.pop()?.valor}`)
        //4 Pop del último elemento ya que no se encontró
        return pilaRuta;
    }
}

var nodo1 = new NodoGrafo(1);
var nodo2 = new NodoGrafo(2);
var nodo3 = new NodoGrafo(3);
var nodo4 = new NodoGrafo(4);
var nodo5 = new NodoGrafo(5);
var nodo6 = new NodoGrafo(6);
var nodo7 = new NodoGrafo(7);
var nodo8 = new NodoGrafo(8);

nodo1.agregarNodoVecino(nodo2);
nodo1.mostrarNodosVecinos();

nodo2.agregarNodoVecino(nodo1);
nodo2.agregarNodoVecino(nodo3);
nodo2.agregarNodoVecino(nodo6);
nodo2.agregarNodoVecino(nodo7);
nodo2.mostrarNodosVecinos();

nodo3.agregarNodoVecino(nodo2);
nodo3.agregarNodoVecino(nodo4);
nodo3.mostrarNodosVecinos();

nodo4.agregarNodoVecino(nodo3);
nodo4.mostrarNodosVecinos();

nodo5.agregarNodoVecino(nodo6);
nodo5.mostrarNodosVecinos();

nodo6.agregarNodoVecino(nodo2);
nodo6.agregarNodoVecino(nodo5);
nodo6.mostrarNodosVecinos();

nodo7.agregarNodoVecino(nodo2);
nodo7.agregarNodoVecino(nodo8);
nodo7.mostrarNodosVecinos();

nodo8.agregarNodoVecino(nodo7);
nodo8.mostrarNodosVecinos();

nodo8.encontrarMejorRuta(5, new Array(), undefined);