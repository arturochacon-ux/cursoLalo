import  scanf  from "scanf"

export class Validacion {

    validarSoloNumeros(num: number): number {
        if (Number.isNaN(num)) {
            console.log("El valor no puede contener letras. Intenta de nuevo: ")
            num = scanf("%d")
        }
        return num
    }

    validarSoloString(nombre: string): string {
        while (this.cadenaContieneNumeros(nombre)) {
            console.log(" El texto no puede contener números. Intenta de nuevo: ")
            nombre = scanf("%s")
        }
        return nombre
    }

    cadenaContieneNumeros(str: string): boolean {
        const regex = /\d/
        return regex.test(str)
    }
}