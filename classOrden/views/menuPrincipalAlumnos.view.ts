
import scanf  from "scanf"
import { ListaDeAlumnos } from "../controlers/listaDeAlumnos-entity"
import { CapturarDatosAlumnos } from "../utils/capturarDatosAlumnos"


export class MenuPrincipalAlumnos {

   
    historialGeneral: ListaDeAlumnos
    elegirOpcion: CapturarDatosAlumnos

    constructor(){
        this.historialGeneral = new ListaDeAlumnos()
        this.elegirOpcion = new CapturarDatosAlumnos(this.historialGeneral)
    }

    mostrarmenu() {
        console.log("\n***** Eliga una opción ****** \n ")
        console.log("1-. Para guardar Alumno")
        console.log("2-. Para mostrar Alumnos")
        console.log("3-. para eliminar un Alumno")
        console.log("0-. Para salir del Menu de Alumnos")
    }

   

    ejecutarprograma() {
        var opcionDelUsuario: number
        do {
            this.mostrarmenu()
            opcionDelUsuario = scanf("%d")
            if (opcionDelUsuario !== 0){        
                this.elegirOpcion.ejecutarAccion(opcionDelUsuario)
            }
        } while (opcionDelUsuario != 0)
            //let regresarMenuPrincipal = new MenuPrincipal()
            //regresarMenuPrincipal.ejecutarPrograma() 
    }
}