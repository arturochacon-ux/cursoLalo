import { Alumno } from "./alumno-entity"
import { Materia } from "../enums/enum-materias";
import { Grado } from "../enums/enum-grado"
import { Calificacion } from "../enums/enum-calificaciones"
import { ListaDeAlumnos } from "../controlers/listaDeAlumnos-entity";

export class Grupo {
    idGrupo: string; 
    horasTotales: number;  
    cupoLimitado: number; 
    grado: Grado; 
    materia: Materia;
    listaDeAlumnos: ListaDeAlumnos
     
    constructor (materia: Materia, claveGrupo: string, horasTotales: number, cupoLimitado: number, grado: Grado, ) {
        this.materia = materia;
        this.idGrupo = claveGrupo;
        this.horasTotales = horasTotales;
        this.cupoLimitado = cupoLimitado;
        this.grado = grado;
        this.listaDeAlumnos = new ListaDeAlumnos()
    }

    agregarAlumno(alumno: Alumno): void {
        if (this.listaDeAlumnos.mostrarAlumnos!= undefined) {
            this.listaDeAlumnos.guardarAlumno(alumno);
            console.log(
                `el alumno ${alumno.nombre} se inscribio al gurpo ${this.materia}`);
        } else {
            console.log(`no hay mas espacio en este grupo`);
        }
    }
    buscarAlumnoPorMatricula(matricula: string): Alumno {
        let alumno = this.listaDeAlumnos.busacadorDeAlumnos(matricula)
        return alumno
    }
    darDeBaja(matricula: string): void {
        var alumnoEncontrado = this.buscarAlumnoPorMatricula(matricula);
        if (alumnoEncontrado != undefined) {
            console.log(
                `el alumno ${alumnoEncontrado?.nombre} con matricual ${matricula} se dio de baja`,
            );
        } else {
            console.log(
                `el alumno que se quiere dar de baja con matricula ${matricula} no se encuentra en este grupo`,
            );
        }
    }
    modigficarInformacionPorMatricula(
        matricula: string,
        alumnoConNuevosDatos: Alumno,
    ): void {
        var alumnoEncontrado = this.buscarAlumnoPorMatricula(matricula);
        if (alumnoEncontrado != undefined) {
            console.log(
                `el alumno al que quieres cambiar los datos es ${alumnoEncontrado?.nombre} con matricula ${alumnoEncontrado?.numeroMatricula}`,
            );
            if (alumnoEncontrado != undefined) {
                alumnoEncontrado.nombre = alumnoConNuevosDatos.nombre;
                alumnoEncontrado.fechaDeNacimiento =
                    alumnoConNuevosDatos.fechaDeNacimiento;
            } else {
                this.agregarAlumno(alumnoConNuevosDatos);
                console.log("no se encontro el alumno que se quiere modificar");
            }
        }
    }

    //
    guardarCalificacion(alumno: Alumno, calificacion: Calificacion): void {
        alumno.notas.push({
            grado: this.grado,
            materia: this.materia,
            calificacion
        })
        console.log(`se guardo la calificación ${calificacion} de ${this.materia} para ${alumno.nombre}`)
    }

    // 
    inscribirAutomaticamente(alumno: Alumno, calificacion: Calificacion, grupos: Grupo[]): void {
        this.guardarCalificacion(alumno, calificacion)
        if (this.grado === Grado.Tercero) {
            console.log(`el alumno ${alumno.nombre} ha concluido el plan de estudios`)
            return
        }
        if (calificacion >= Calificacion.Seis) {
            let grupoSiguiente = grupos.find(g => g.grado === this.grado + 1 && g.materia === this.materia)
            if (grupoSiguiente) {
                grupoSiguiente.agregarAlumno(alumno)
                console.log(`l alumno ${alumno.nombre} pasó al grado ${Grado[this.grado]} en ${this.materia}`)
            }
        } else {
            let grupoMismo = grupos.find(g => g.grado === this.grado && g.materia === this.materia)
            if (grupoMismo) {
                grupoMismo.agregarAlumno(alumno)
                console.log(`el alumno ${alumno.nombre} repite el grado ${Grado[this.grado]} en ${this.materia}`)
            }
        }
    }
    
}
