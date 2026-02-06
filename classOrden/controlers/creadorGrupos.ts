
import scanf from "scanf";
import { Validacion } from "../models/validacion";
import { Materia } from "../enums/enum-materias";
import { Grado } from "../enums/enum-grado";

export class CrearGrupo {

    horasTemporal: number = 0
    cupoTemporal: number = 0
    grado: string = ""
    materia: string = ""
    id: string = ""

    validaciones = new Validacion()


    
    validacionHorasTotales(): number {
        do { 
            console.log("igrese el numero de horas totales de la clase")
            this.horasTemporal = this.validaciones.validarSoloNumeros(scanf("%d"))
        } 
        while (this.horasTemporal === 0)
        return this.horasTemporal
    }

    vlaidacionCupoTemporal(): number {
        do {
            console.log("ingrese el cupo tota de alumnos del grupo")
            this.cupoTemporal = this.validaciones.validarSoloNumeros(scanf("%d"))
        }
        while (this.cupoTemporal === 0 )
        return this.cupoTemporal
    }

    crearId(): string {
        do {
            console.log("ingrese un id de su grupo")
            this.id = scanf("%s")
        }
        while (this.id === "" )
        
        return this.id
    }

    seleccionarDeEnum(eleccion:any): any {
        const opciones = Object.values(eleccion);
        

        console.log("Seleccione una opción: ");
        for (let i = 0; i < opciones.length; i++) {
            console.log(`${i + 1}. ${opciones[i]}`);
        }

        let seleccion = 0;
        while (seleccion < 1 || seleccion > opciones.length) {
            console.log(`Ingrese un nú2mero entre 1 y ${opciones.length}`);
            seleccion = this.validaciones.validarSoloNumeros(scanf("%d"));
        }
        let valor = opciones[seleccion-1]
        console.log(`Seleccionaste: ${valor}`);
        return valor
    }

    
    seleccionarMateria(): Materia {
        return this.seleccionarDeEnum(Materia);
    }

    seleccionarGrado(): Grado {
        return this.seleccionarDeEnum(Grado)
    }

}