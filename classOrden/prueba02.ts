
class ListaNumeros {
    lista: number[] = [1, 12, 78, 56, 2, 9, 0]

    buscador(): void;
    buscador(numeroAEncontrar: number): void;
    buscador(posicion?: unknown, numeroAEncontrar?: unknown): void {
        if (posicion == undefined && numeroAEncontrar == undefined) {
            this.imprimirLista()
        }
        else if (typeof posicion === undefined && numeroAEncontrar != undefined) {
            this.validarNumero(numeroAEncontrar)
        }
        else if (posicion != undefined && numeroAEncontrar == undefined ) {
            this.validaarIndice(posicion)
        }
    }

    private imprimirLista() {
        let contador = 0
        while (contador < this.lista.length) {
            console.log(this.lista[contador])
            contador++
        }

    }

    private validarNumero(numeroAEncontrar: any) {
        let encontrado = false
        let contador = 0
        while (contador < this.lista.length) {
            if (this.lista[contador] === numeroAEncontrar) {
                console.log("Sí se encontró el número en la posición", contador+1)
                encontrado = true
                break
            }
            contador++
        }
        if (encontrado) {
            console.log("No se encontró el número")
        }
    }

    private validaarIndice(posicion: any) {
        let contador = 0
        while(contador < this.lista.length) {
            if (this.lista[posicion] === this.lista[contador]) {
                console.log ("el numero que se encuentra en la esta pocicion es " + this.lista[posicion])
                break
            }
            contador++
        }
        console.log("No se encontó el número0000")
    }
}

let nuevalista = new ListaNumeros()
nuevalista.buscador()
nuevalista.buscador(78)
nuevalista.buscador(2)






class Calculadora {
    
    sumar(sumando1: number[]): void;
    sumar(sumando1: string, sumando2: string): void;
    sumar(sumando1: number, sumando2: number): any;

    sumar(sumando1: any, sumando2?: any): any {

        if (Array.isArray(sumando1)) {
            let resultado = 0
            let contador = 0
            while (contador < sumando1.length) {
                resultado += sumando1[contador]
                contador++
            }
            return console.log("La suma del arreglo es:", resultado)
        }

        else if (typeof sumando1 === "number" && typeof sumando2 === "number") {
            return console.log("La suma es:", sumando1 + sumando2)
        }

        else if (typeof sumando1 === "string" && typeof sumando2 === "string") {
            return console.log("La concatenación es:", sumando1 + sumando2)
        }

        else {
            return console.log("Parámetros no válidos")
        }
    }
}

let nuevaCalculadora = new Calculadora()
nuevaCalculadora.sumar(4, 6)
nuevaCalculadora.sumar("Hola ", "mundo")
nuevaCalculadora.sumar([1, 2, 3, 4, 5])



class AgregarUsuarios {

    agregar(nombre: string): void;
    agregar(nombre: string, edad: number): void;
    agregar(nombre: string, edad: number, correo: string):void;
    agregar(nombre: unknown, edad: unknown, correo: unknown): any {
        
        if (nombre!= undefined && edad == undefined && correo == undefined) {
            console.log("se guardo el usuario " + nombre)
        }
        else if (nombre != undefined && edad != undefined && correo == undefined ){
            console.log("se guardo el usuario " + nombre + ", su edad es de " + edad)
        }
        else if (nombre != undefined && edad != undefined && correo != undefined ){
            console.log("se guardo el usuario " + nombre + ", su edad es de " + edad + " su correo es "+ correo)
        } else {
            console.log("el paso de parametros es incorrecto")
        }
    }
}

var nuevoUsuario = new AgregarUsuarios()
nuevoUsuario.agregar()
nuevoUsuario.agregar("arturo")
nuevoUsuario.agregar("juan", 20)
nuevoUsuario.agregar("mariano", 19, "jmariano@gmail.com")
