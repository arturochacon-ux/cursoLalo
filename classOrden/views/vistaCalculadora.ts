import scanf from "scanf";
import { ProcesadorDeStrigs } from "../utils/seleccionarOperacion";


export class MenuCalculadora {
    operacion: string = "0"
    resultado: any = 0
    procesadorDeStrigs: ProcesadorDeStrigs
    constructor() {
        this.procesadorDeStrigs = new ProcesadorDeStrigs()
    }

    inicio() {

        console.log("\n************Bienvenido*************\n")
        console.log("Introduzca su operacion de la siguiente manera")
        console.log("Ejemplo: 5-4")
        console.log("\n***Digite 0 para salir del programa***\n")
        do {
            this.operacion = (scanf("%s"))
            if (this.operacion != "0") {
                this.resultado = this.procesadorDeStrigs.realizarOperacionBasica(this.operacion)
                console.log("\nEl resultado de la operacion " + this.operacion )
                console.log("es: " + this.resultado)
            }

        } while (this.operacion != "0") {
            console.log("     ******Adios******")
        }
    }
}

