export class NodoListaLigada {

    valorGuardado: any;

    private siguienteElementoEnLista: NodoListaLigada | undefined;

    constructor(valorGuardado: any, siguienteElementoEnLista: NodoListaLigada | undefined) {
        this.valorGuardado = valorGuardado;

        this.siguienteElementoEnLista = siguienteElementoEnLista;
    }

    setSiguienteElemento(siguienteElementoEnLista: NodoListaLigada | undefined) {
        this.siguienteElementoEnLista = siguienteElementoEnLista;
    }

    getSiguienteElemento(): NodoListaLigada | undefined {
        return this.siguienteElementoEnLista;
    }

    mostrarValorGuardado() {
        console.log(`El valor guardado es: ${this.valorGuardado}`)
    }
}


