import {MiExcepcion} from "./miExcepcion-entity"

export class AlumnoDuplicado extends MiExcepcion {
    statusCode: number = 404

    constructor(mensaje: string) {
        super(mensaje);
        this.name = "No se encontro el alumno"
    }
}
