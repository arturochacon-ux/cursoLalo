import scanf from "scanf"
import { Alumno } from "../models/alumno-entity"
import { CrearAlumno } from "../controlers/creadorAlumnos"
import { ListaDeAlumnos } from "../controlers/listaDeAlumnos-entity"


export class CapturarDatosAlumnos {

    historialAlumnos: ListaDeAlumnos

    constructor(historialAlumnos: ListaDeAlumnos) {
        this.historialAlumnos = historialAlumnos
    }

    ejecutarAccion(opcion: number) {
        if (opcion === 1) {
            let crearAlumno = new CrearAlumno()
            let nombre = crearAlumno.vlidacionNombreAlumno()
            let fecha = crearAlumno.vlidacionFechaDeNacimiento()
            let matricula = crearAlumno.validacionMatricula()
            let anios = crearAlumno.calcularEdad()
            let nuevoAlumno = new Alumno(nombre, fecha, matricula, anios)
            this.historialAlumnos.listaAlumnos.push(nuevoAlumno)
            nuevoAlumno.mostrarInfoAlumno()
        } else if (opcion === 2) {
            console.log("estos son todos alumnos que se encuentran inscritos en la escuela\n")
            this.historialAlumnos.mostrarAlumnos()

        } else if (opcion === 3) {
            console.log("ingrese la matricula del alumno")
            this.historialAlumnos.eliminarAlumno(scanf("%s"))

        } else if (opcion != 0) {
            console.log("Marque una opción válida")
        }
    }
}



