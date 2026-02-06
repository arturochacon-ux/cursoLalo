
import { Grado } from "../enums/enum-grado";
import { Materia } from "../enums/enum-materias";
import { Calificacion } from "../enums/enum-calificaciones";

export class Alumno {
    nombre: string;
    fechaDeNacimiento: Date;
    numeroMatricula: string;
    anios: number
    notas: { grado: Grado; materia: Materia; calificacion: Calificacion }[] = [];

    constructor(nombre: string, fechaDeNacimiento: Date, numeroMatricula:string, anios:number) {
        this.nombre = nombre;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.numeroMatricula = numeroMatricula
        this.anios = anios
        this.notas = [];
    }

    // muestra la informacion del alumno
    mostrarInfoAlumno(): void {
        console.log(
            `\nnombre: ${this.nombre} \nfecha de nacimiento: ${this.fechaDeNacimiento} \naños: ${this.anios} \nmatricula: ${this.numeroMatricula}`,
        );
    }
    // agraga la notas del alumno, le tenemos que pasar como parametro grado, materia, calificasion, 
    agragarNotas(
        grado0: Grado,
        materia: Materia,
        calificacion: Calificacion,
    ): void {
        let contador = 0;
        //recorre la lista de notas que se tiene, verifica que no exista una calificasion del mismo grado y del misma materia
        // si no existe la calificasion de esa materia y de ese grado se guarda la calificasion
        while (contador < this.notas.length) {
            if (grado0 === this.notas[contador].grado) {
                if (materia === this.notas[contador].materia) {
                    console.log(
                        "el alumno ya tiene una calificasion en esa materia",
                    );
                    break;
                }
            }
            contador++;
        }
        this.notas.push({ grado: grado0, materia, calificacion });
    }
}
