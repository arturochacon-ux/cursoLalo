
export class Estacion {
    nombre: string;
    private proximaParada: Estacion | undefined;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.proximaParada = undefined;
    }

    setSiguienteEstacion(siguiente: Estacion | undefined) {
        this.proximaParada = siguiente;
    }

    getSiguienteEstacion(): Estacion | undefined {
        return this.proximaParada;
    }
}

