
import scanf from "scanf";
import { Validacion } from "../entytis/validacion-entyti"

export class Menu {
    validaciones = new Validacion()

    bienvenida(){
        console.log("\nBienvenido");
    }

    menuPrincipal() {
        console.log("\n¿Qué quieres hacer?");
        console.log("Marca 1-. para ver todas las estaciones del metro");
        console.log("Marca 2-. para ver cuántas estaciones te faltanpara tu destino");
        console.log("Marca 0-. para salir del menú");


    }
    entradaDeOpciones() {
        let numero = this.validaciones.validarSoloNumeros(scanf("%d"))
        while (numero == undefined) {
            console.log("Marca una opción valida");
            numero = this.validaciones.validarSoloNumeros(scanf("%d"))
        }
        return numero
    }

    mostrar() {
        console.log("Estas son todas las estaciones de la Línea Café:");
    }

    ingresaEstacionUno() {
        console.log("¿Quieres saber cuántas estaciones te faltan para tu destino?");
        console.log("Ingresa el numero de la estación donde te encuentras:");
        let estoyEn = this.entradaDeOpciones()
        return estoyEn
    }
    ingresaEstacionDos() {
        console.log("Ingresa el numero de la estación a la que vas:");
        let vamosA = this.entradaDeOpciones()
        return vamosA
    }

    estacionesFaltantes(numeroDeEstaciones: number | undefined) {
        if (numeroDeEstaciones == undefined) {
            console.log("Buelva a intentarlo, no se encontaron estaciones relecionadas con esoso datos")
        } else if (numeroDeEstaciones < 0) {
            console.log("Te hacen falta " + numeroDeEstaciones * -1 + " estaciones para llegar a tu destino. Direccion Tacubaya");
        } else {
            console.log("Te hacen falta " + numeroDeEstaciones + " estaciones para llegar a tu destino. Direccion Pantitlan");
        }

    }

    error(){
        console.log("Ingrese una opcion valida ")
    }
    despedida() {
        console.log("\nAdios...")
    }
}