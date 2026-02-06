

import scanf  from "scanf"
import { CapturarDatosGrupos } from "../utils/capturarDatosGrupos"
import { ListaDeGrupos } from "../controlers/listaDeGrupos-entity"
import { Validacion } from "../models/validacion"
import { ListaDeAlumnos } from "../controlers/listaDeAlumnos-entity"
import { CapturarDatosAlumnos } from "../utils/capturarDatosAlumnos"

export class MenuPrincipalGrupos {
    datosAlumnos: CapturarDatosAlumnos
    datosGrupos: CapturarDatosGrupos
    listaDeGrupos: ListaDeGrupos
    listaDeAlumnos:ListaDeAlumnos
    validar = new Validacion()

    constructor(datosAlumnos: CapturarDatosAlumnos){
        this.datosAlumnos = datosAlumnos
        this.listaDeAlumnos = new ListaDeAlumnos ()
        this.listaDeGrupos = new ListaDeGrupos()
        this.datosGrupos = new CapturarDatosGrupos(this.listaDeGrupos, this.datosAlumnos,)
    }
    

    mostrarmenu() {
        console.log("\n***** Eliga una opción ****** \n ")
        console.log("1-. Para crear un Grupo")
        console.log("2-. Para mostrar todos los Grupos")
        console.log("3-. para eliminar un Grupo")
        console.log("4-. Para ingresar a un Gupo y mosrtrar Alumnos")
        console.log("5-. Para inscribir un Alumno en un Grupo")
        console.log("6-. Para elimninar un Alumno de un Grupo")
        console.log("0-. Para regresar al Menu Principal")
    }

    ejecutarprograma() {
        var opcion: number
        do {
            this.mostrarmenu()
            opcion = scanf("%d")
            this.datosGrupos.accionesDeGrupos(this.validar.validarSoloNumeros(opcion))
        } while ( opcion != 0)
            /*let regresarAlMenuPrincipal = new MenuPrincipal()
            regresarAlMenuPrincipal.ejecutarPrograma()*/
    }

}