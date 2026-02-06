import { Alumno } from "../models/alumno-entity.ts"
import { Grado } from "../enums/enum-grado.ts"
import { AlumnoDuplicado } from "../utils/mensaje-entity.ts"

export class ListaDeAlumnos {
    listaAlumnos: Alumno[] = [];
    // el historial tiene una propiedad de lista de alumnos donde se gaudan todos los alumnos que se encuentran inscritos en cualquier grupo
    constructor() {
        this.listaAlumnos = [];
    }
    // muestra los alumnos inscritos, recorriendo toda la lista solo se imprime el nombre
    mostrarAlumnos() {
        if (this.listaAlumnos.length === 0) {
            console.log("no existen alumnos registrados aun")
        } else {
            let contador = 0;
            while (contador < this.listaAlumnos.length) {
                console.log(contador+1 + "-." + this.listaAlumnos[contador].nombre);
                contador++
            }
        }
    }

    guardarAlumno(alumno: Alumno) {
        while(alumno === this.busacadorDeAlumnos(alumno.numeroMatricula)) {
            console.log("este alumno ya se encunentra inscrito")
        }
        this.listaAlumnos.push(alumno)
            console.log("se agrego el alumno: " + alumno.nombre)
        
    }

    eliminarAlumno(matricula: Alumno["numeroMatricula"]) {
        let contador = 0;
        while (contador < this.listaAlumnos.length) {
            if (matricula === this.listaAlumnos[contador].numeroMatricula) {
                this.listaAlumnos.splice(contador)
                console.log("se elimino el alumno con la matricula: " + matricula)
            }
            contador++
        }  
        console.log("no existe un alumno con esa matricula")
    }
    //este metodo busca alumnos por matricula recorriendo toda la lista de alumnos que se encuentran en si lo encuentr regresa el objeto
    //alumno y si no lo encuantra retorna un undefined 
    busacadorDeAlumnos(matriculaDeAlumno: Alumno["numeroMatricula"]): Alumno {
        let contador = 0;
        while (contador < this.listaAlumnos.length) {
            if (matriculaDeAlumno === this.listaAlumnos[contador].numeroMatricula) {
                return this.listaAlumnos[contador]
            }
            contador++
        }
        // Si no encontró nada, lanza excepción personalizada
        throw new AlumnoDuplicado("No se encontró el alumno");
    }
    //este metosdo se le pasa el numero de matricula del alumno, 
    promedioGeneralPorAlumno(
        matricula: Alumno["numeroMatricula"],): number | undefined {
        let contador = 0;
        let notas = 0;
        let alumnoEncontrado = this.busacadorDeAlumnos(matricula);
        if (alumnoEncontrado != undefined) {
            while (contador < alumnoEncontrado.notas.length) {
                notas += alumnoEncontrado.notas[contador].calificacion;
                contador++;
            }
            return notas / contador;
        }
        console.log("el promediogeneral del alumno es de " + notas / contador);
    }

    promedioPorGrado(
        matricula: Alumno["numeroMatricula"],
        grados: Grado,
    ): number | undefined {
        let obtenerAlumno = this.busacadorDeAlumnos(matricula);
        let calificacion = 0;
        let contador2 = 0;
        if (obtenerAlumno != undefined) {
            for (
                let contador = 0;
                contador < obtenerAlumno.notas.length;
                contador++
            ) {
                if (grados === obtenerAlumno.notas[contador].grado) {
                    contador2++;
                    calificacion += obtenerAlumno.notas[contador].calificacion;
                }
            }
            return calificacion / contador2;
        } else {
            console.log("el alumno no se esncuentra con esa matricula");
        }
    }
    alumnoDestacadoGeneral(): void {
        let contador = 0;
        let calificaciones = 0;
        let alumnoDestacado: string[] = [];
        while (contador < this.listaAlumnos.length) {
            let promedio = this.promedioGeneralPorAlumno(
                this.listaAlumnos[contador].numeroMatricula,
            );
            if (promedio != undefined && promedio > calificaciones) {
                calificaciones = promedio;
                alumnoDestacado = [this.listaAlumnos[contador].nombre];
            } else if (promedio === calificaciones) {
                alumnoDestacado.push(this.listaAlumnos[contador].nombre);
            }
            contador++;
        }
        contador = 0;
        while (alumnoDestacado.length > 0) {
            console.log(
                "el mejor prome dio es de el alumno" +
                alumnoDestacado[contador] +
                " con promedio " +
                calificaciones,
            );
            contador++;
        }
    }
    mejorAlumnoPorGrado(grado: Grado): void {
        let mejorPromedio = 0;
        let alumnosDestacados: string[] = [];
        for (let alumno of this.listaAlumnos) {
            let suma = 0;
            let contador = 0;
            for (let nota of alumno.notas) {
                if (nota.grado === grado) {
                    suma += nota.calificacion;
                    contador++;
                }
            }
            const promedio = suma / contador;
            if (promedio > mejorPromedio) {
                mejorPromedio = promedio;
                alumnosDestacados = [alumno.nombre];
            } else if (promedio === mejorPromedio) {
                alumnosDestacados.push(alumno.nombre);
            }
        }
        console.log(`Mejor promedio del grado ${Grado[grado]}: ${mejorPromedio}`);
        console.log(`Alumno(s): ${alumnosDestacados}`);
    }
}
