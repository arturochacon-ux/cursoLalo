import scanf from "scanf"

export class Validacion {

    validarSoloNumeros(num: number): number {
        while (Number.isNaN(num)) {
            console.log("El valor no puede contener letras. Intenta de nuevo: ")
            num = scanf("%d")
        }
        return num
    }
}