import scanf from "scanf"
import { Validacion } from "../models/validacion"



export class CrearAlumno {
    anio: number = 0
    mes: number = -1
    dia: number = 0

    fechaNacimientoTemporal: Date = new Date()
    validacion = new Validacion()
    nombreTemporal:string = ""
    matriculaTemporal: string = ""
    anioActual = this.fechaNacimientoTemporal.getFullYear()

    vlidacionNombreAlumno(): string {
        console.log("Ingrese el nombre del Alumno ")
        this.nombreTemporal = this.validacion.validarSoloString(scanf("%s"))
        while (this.nombreTemporal === "") {
            console.log("ingrese un valor")
            this.nombreTemporal = this.validacion.validarSoloString("%S")
        }
        return this.nombreTemporal
    }

    vlidacionFechaDeNacimiento(): Date {
        
        console.log("ingrese el año de nacimiento")
        this.anio =this.validacion.validarSoloNumeros(scanf("%d"))
        while (this.anio < 1900 || this.anio > 2025) {
            console.log("ingrese una valor valido")
            this.anio =this.validacion.validarSoloNumeros(scanf("%d"))
        }

        console.log("ingrese el mes")
        this.mes = this.validacion.validarSoloNumeros(scanf("%d"))
        while (this.mes < 1 || this.mes > 12) {
            console.log("ingrese un valor valido")
            this.mes = this.validacion.validarSoloNumeros(scanf("%d"))
        }

        console.log("ingrese el dia")
        this.dia = this.validacion.validarSoloNumeros(scanf("%d"))
        while (this.dia < 1 || this.dia > 31) {
            console.log("ingrese un valor valido")
            this.dia = this.validacion.validarSoloNumeros(scanf("%d"))
        }
        
        let fecha = new Date(this.anio, this.mes-1, this.dia)
        return fecha 
        
    }

    calcularEdad(): number {
        const hoy = new Date()
        let edad = hoy.getFullYear() - this.fechaNacimientoTemporal.getFullYear()
        const mesActual = hoy.getMonth()
        const diaActual = hoy.getDate()
      
        if (mesActual < this.fechaNacimientoTemporal.getMonth() || 
        (mesActual === this.fechaNacimientoTemporal.getMonth() && diaActual < this.fechaNacimientoTemporal.getDate())) {
            edad--
        }

        console.log(`Su edad es: ${edad} años`)
        return edad
    }

    validacionMatricula(): string {
        
        do {
            console.log("agurege una matricula para el alumno")
            this.matriculaTemporal = (scanf("%s"))
        }
        while(this.matriculaTemporal === "")
        return this.matriculaTemporal
    }
    
}
