import scanf from "scanf"
import { MenuPrincipalAlumnos } from "./menuPrincipalAlumnos.view"
import { MenuPrincipalGrupos } from "./menuPrincipalGrupos.viw"
import { Validacion } from "../models/validacion"
import { ListaDeGrupos } from "../controlers/listaDeGrupos-entity"
import { CapturarDatosGrupos } from "../utils/capturarDatosGrupos"
import { ListaDeAlumnos } from "../controlers/listaDeAlumnos-entity"
import { CapturarDatosAlumnos } from "../utils/capturarDatosAlumnos"

export class MenuPrincipal {

    menuAlumno = new MenuPrincipalAlumnos()
    menuGrUpos: MenuPrincipalGrupos
    validar = new Validacion()
    datosGrupos: CapturarDatosGrupos
    listaDeGrupos: ListaDeGrupos
    listaDeAlumnos: ListaDeAlumnos
    elegirOpcion: CapturarDatosAlumnos
    elegirunaOpcion: CapturarDatosAlumnos

    constructor(){
        this.listaDeAlumnos = new ListaDeAlumnos()
        this.elegirOpcion = new CapturarDatosAlumnos(this.listaDeAlumnos)
        this.listaDeGrupos = new ListaDeGrupos()
        this.datosGrupos = new CapturarDatosGrupos(this.listaDeGrupos, this.elegirOpcion)
        this.menuGrUpos = new MenuPrincipalGrupos(this.elegirOpcion)
    }


    mostrarMenuPrincipal() {
        console.log("\n************ BIENBENIDO ***********")
        console.log("  ******* Eliga una opcion ******\n")
        console.log("1-. Para ingresar al Menu de Alumnos ")
        console.log("2-. Para ingresar al Menu de Grupos")
        console.log("0-. Para salir del Programa")
    }

    ejecutarPrograma() {
        var opcion: number
        do {
            this.mostrarMenuPrincipal()
            opcion = scanf("%d")
            this.validar.validarSoloNumeros(opcion)
            if (opcion !== 0) {
                if (opcion === 1) {
                    this.menuAlumno.ejecutarprograma()
                } else if (opcion === 2) {
                    this.menuGrUpos.ejecutarprograma()
                } else {
                    console.log("\n**** Ingrese una opcion valida ****")
                }
            }
        } while (opcion != 0)
        console.log("\n********** Fin del programa **********")
        console.log("   ************ ADIOS ************ ")
    }
}