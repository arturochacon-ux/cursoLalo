/*abstract class MisErrores extends Error {
    abstract statusCode: number
    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, new.target.prototype)
    }
}

class NumeroInvalido extends MisErrores {
    statusCode: number = 404
    propiedad1 = "no se puede dividir entre cero"
    constructor(message: string) {
        super(message);
    }
}

class Operacion {
    suma(numero1: number, numero2: number) {
        return numero1 + numero2
    }

    resta(numero1: number, numero2: number) {
        return numero1 - numero2
    }

    multiplicasion(numero1: number, numero2: number) {
        return numero1 * numero2
    }
    divicion(numero1: number, numero2: number) {
        if (numero2 === 0) {
            throw new NumeroInvalido("no se puede dividir entre cero")
        }
        return numero1 / numero2
    }
}

import scanf from "scanf"
var operacionesMatematicas = new Operacion();
try {
    EligeUnaOperacion()
} catch (error) {
    if (error instanceof MisErrores) {
        console.log(error.message)
    }
} finally {
    console.log("fin del programa")
    EligeUnaOperacion()
}


function EligeUnaOperacion() {
    //console.log("Ingrese el tipo de opracion que quiere realizar")
    //r operacionDeseada = scanf(Operacion.toString())

    console.log("Ingresa el primer numero: ")
    var numero1 = scanf("%d")

    console.log("Ingresa el segundo numero: ")
    var numero2 = scanf("%d")

    if(numero2 != null && numero1 != null ){
        var resultado = operacionesMatematicas.divicion(numero1, numero2);
    }else { 
        throw new NumeroInvalido("")
    }
    console.log("El resultado es: " + resultado);
}



do {
    console.log("")
    console.log("")
    console.log("")
    onsole.log("")
    console.log("")


}

*/
import scanf from "scanf"

class Alumno {
    nombre: string
    edad: number

    constructor(nombre:string, edad:number) {
        this.nombre = nombre
        this.edad = edad
    }
}

class Listaa {
    listaDeAlumnos: Alumno[]
    opcion: number
    nombre: string
    edad: number

    constructor(opcion:number, nombre:string, edad:number) {
        this.opcion = opcion
        this.nombre = nombre
        this.edad = edad
        this.listaDeAlumnos = []
    }



    guardarAlumno() {
        var crearAlumno = new Alumno(this.nombre, this.edad)
        this.listaDeAlumnos.push(crearAlumno)
    }
    mostarLista(){
        let contador = 0
        while(contador < this.listaDeAlumnos.length) {
            console.log(this.listaDeAlumnos[contador])
            contador++
        }
    }

    menu(){
        console.log(" Que accion quieres realizar?")
        console.log("1.- Guardar Alumno ")
        console.log("2.- Mostrar Alumnos")
    }

    capturarTarea() {
        console.log("Ingrese una opcion")
        this.opcion = scanf("%d")

    }

        
    ejecutarOperacion(): void {

        switch(this.opcion) {

            case 1: this.guardarAlumno(this.nombre, this.edad);
                break;
        
            case 2: this.mostarLista();
                break;

            default:
                console.log("Elige una opción valida")
        }

    }



}




/*
1.- Registrar Alumno (nombre y edad)
2.- Mostrar alumnos
3.- Salir
*/