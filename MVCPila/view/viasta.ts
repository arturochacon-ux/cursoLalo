
import scanf from "scanf";
import { Validacion } from "../../MVC/entytis/validacion-entyti";
import { ControlerMapa } from "../entytis/controlerMapa-entyti";
import { lineasMetro } from "../doc";
import { Creador } from "../doc";
export class Menu {
    validaciones = new Validacion()
    controlerMapa = new ControlerMapa()
    crea = new Creador(lineasMetro)



    bienvenida() {
        console.log("\nBienvenido");
    }

    menuPrincipal() {
        console.log("\n¿Qué quieres hacer?");
        console.log("1-. Ver todas las estaciones de una linea");
        console.log("2-. Calcular ruta entre estaciones");
        console.log("0-. Salir");
    }



    seleccionEstaciones(): number{
        console.log("ingresa el numero de la linea que te interesa")
        return this.entradaDeOpciones()
    }

    seleccionLinea(): number {
        console.log("ingresa el numero de la linea en la que te encuentras") 
        return this.entradaDeOpciones()
    }
    seleccionEstacion(): number {
        console.log("ingresa el numreso de la estacion es la que te enecuentras")
        return this.entradaDeOpciones()
    }
    seleccionLineaDestino(): number {
        console.log("ingresa el numero de la linea a la que vas")
        return this.entradaDeOpciones()
    }
    seleccionEstacionDestino(): number {
        console.log("ingrese el numero de la estacion a la que vas")
        return this.entradaDeOpciones()
    }










    entradaDeOpciones() {
        let numero = this.validaciones.validarSoloNumeros(scanf("%d"))
        while (numero == undefined) {
            console.log("Marca una opción valida");
            numero = this.validaciones.validarSoloNumeros(scanf("%d"))
        }
        return numero
    }
    
    error() {
        console.log("Ingrese una opcion válida.")
    }

    despedida() {
        console.log("\nAdiós...");
    }
}