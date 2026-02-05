
import scanf from "scanf";
import { Validacion } from "../../MVC/entytis/validacion-entyti";

export class Menu {
    validaciones = new Validacion()

    bienvenida(){
        console.log("\nBienvenido");
    }

    menuPrincipal() {
        console.log("\n¿Qué quieres hacer?");
        console.log("1-. Ver todas las estaciones de una linea");
        console.log("2-. Calcular ruta entre estaciones");
        console.log("0-. Salir");
    }

    entradaDeOpciones() {
        let numero = this.validaciones.validarSoloNumeros(scanf("%d"))
        while (numero == undefined) {
            console.log("Marca una opción valida");
            numero = this.validaciones.validarSoloNumeros(scanf("%d"))
        }
        return numero
    }

    seleccionDeEstacion() {
        console.log("Ingrese el numero de la linea que le interese")
        let key = this.entradaDeOpciones()
        console.log("Estas son todas las estaciones:")
        return key
    }

    mostrar(){
        console.log("Estas son todas las estaciones:")
    }

    ingresaEstacionUno() {
        console.log("Ingresa el numero de la estación donde te encuentras:");
        let estoyEn = this.entradaDeOpciones()
        return estoyEn
    }

    ingresaEstacionDos() {
        console.log("Ingresa el número de la estación a la que vas:");
        let vamosA = this.entradaDeOpciones()
        console.log("\nBuscando la mejor ruta...\n");
        return vamosA
    }

    error(){
        console.log("Ingrese una opcion válida.")
    }

    despedida() {
        console.log("\nAdiós...");
    }
}