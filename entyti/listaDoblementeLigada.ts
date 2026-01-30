
export class NodoListaDoblementeLigada {

    valorGuardado: any;

    private siguienteElementoEnLista: NodoListaDoblementeLigada | undefined = undefined;
    private anteriorElementoEnLista: NodoListaDoblementeLigada | undefined = undefined;

    constructor(anteriorElementoEnLista: NodoListaDoblementeLigada | undefined, valorGuardado: any, siguienteElementoEnLista: NodoListaDoblementeLigada | undefined) {
        this.siguienteElementoEnLista = siguienteElementoEnLista;
        this.valorGuardado = valorGuardado;
        this.anteriorElementoEnLista = anteriorElementoEnLista
    }
    
    setAnteriorElemento(anteriorElemento: NodoListaDoblementeLigada | undefined) {
        this.anteriorElementoEnLista = anteriorElemento
    }

    getAnteriorElemento(): NodoListaDoblementeLigada | undefined {
        return this.anteriorElementoEnLista
    }


    setSiguienteElemento(siguienteElementoEnLista: NodoListaDoblementeLigada | undefined) {
        this.siguienteElementoEnLista = siguienteElementoEnLista;
    }

    getSiguienteElemento(): NodoListaDoblementeLigada | undefined {
        return this.siguienteElementoEnLista;
    }

    mostrarValorGuardado() {
        console.log(`El valor guardado es: ${this.valorGuardado}`)
    }
}




