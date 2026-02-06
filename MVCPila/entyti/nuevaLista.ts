

class NodosDoblementeEnlazados {
    valor: number
    nodoSiguente: NodosDoblementeEnlazados | undefined;
    nodoAnterior: NodosDoblementeEnlazados | undefined;

    constructor(valor: number) {
        this.valor = valor
    }

    setSiguienteNodo(nodo: NodosDoblementeEnlazados | undefined

    ) {
        this.nodoSiguente = nodo
    }

    getSiguiteNodo(): NodosDoblementeEnlazados | undefined {
        return this.nodoSiguente
    }

    setAnteriorNodo(nodo: NodosDoblementeEnlazados | undefined

    ) {
        this.nodoAnterior = nodo
    }
    getAnteriorNodo(): NodosDoblementeEnlazados | undefined {
        return this.nodoAnterior
    }

    mostrarValor(){
        console.log("El valor guardado es: " + this.valor)
    }
}

class LisaDoble {
    private primerNodo0: NodosDoblementeEnlazados | undefined;
    private ultimoNodo0: NodosDoblementeEnlazados | undefined;
    //private actualNodo0: NodosDoblementeEnlazados | undefined = undefined/;

    constructor(primerNodo: NodosDoblementeEnlazados | undefined, ultimoNodo: NodosDoblementeEnlazados | undefined, /*nodoactual: NodosDoblementeEnlazados | undefined*/) {
        this.primerNodo0 = primerNodo
        this.ultimoNodo0 = ultimoNodo
        //this.actualNodo0 = nodoactual
    }

    agregarNodoSiguente(nodoAgregado: NodosDoblementeEnlazados) {
        let actualNodo0 = this.primerNodo0
        while (actualNodo0 != undefined && actualNodo0.valor < nodoAgregado.valor) {
            this.ultimoNodo0 = actualNodo0
            actualNodo0 = actualNodo0.nodoSiguente
        }
        actualNodo0?.setAnteriorNodo(nodoAgregado)
        nodoAgregado.setSiguienteNodo(actualNodo0)
    }
    

    mostrarDeMenorAMayor (){
        let actualNodo0 = this.primerNodo0
        while(actualNodo0 != undefined
    
        ) {
            actualNodo0.mostrarValor()
            actualNodo0 = actualNodo0.getSiguiteNodo()
        }
    }

    mostrarDeMayorAMenor () {
        let actualNodo0 = this.ultimoNodo0
        while(actualNodo0 != undefined) {
            actualNodo0.mostrarValor()
            actualNodo0 = actualNodo0.getAnteriorNodo()
        }
    }
}

let miNod0o = new NodosDoblementeEnlazados(1)
let segund0o = new NodosDoblementeEnlazados(2)
let nueve0 = new NodosDoblementeEnlazados(9)
let misegundaLista = new LisaDoble(nueve0, miNod0o)

misegundaLista.agregarNodoSiguente(new NodosDoblementeEnlazados (1))
misegundaLista.agregarNodoSiguente(new NodosDoblementeEnlazados(15))
misegundaLista.agregarNodoSiguente(new NodosDoblementeEnlazados(3))
misegundaLista.agregarNodoSiguente(new NodosDoblementeEnlazados(9))
misegundaLista.mostrarDeMenorAMayor()
misegundaLista.mostrarDeMayorAMenor()

