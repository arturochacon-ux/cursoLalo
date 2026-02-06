
import { Estacion } from "../entytis/estacionDelMetro-entyti"

export class LineaCafe {
    private primerEstacion: Estacion | undefined;
    private anteriorEstacion: Estacion | undefined;

    constructor() {
        this.primerEstacion = undefined;
    }
    agregarEstaciones(estacionAgregar: Estacion) {
        let indice = this.primerEstacion;

        if (indice == undefined) {
            this.primerEstacion = estacionAgregar; 
            return;
        }

        while (indice != undefined) {
            this.anteriorEstacion = indice;
            indice = indice.getSiguienteEstacion();
        }

        this.anteriorEstacion?.setSiguienteEstacion(estacionAgregar);
    }
    mostrar() {
        let estacion = this.primerEstacion;
        let contador = 1;

        while (estacion != undefined) {
            console.log(contador + ".- " + estacion.nombre);
            estacion = estacion.getSiguienteEstacion();
            contador++;
        }
    }
    crearEstaciones() {
        let nombresEstaciones = [ "Tacubaya", "Patriotismo", "Chilpancingo", "Centro Médico", "Lázaro Cárdenas", 
            "Chabacano", "Jamaica", "Mixiuhca", "Velódromo", "Ciudad Deportiva", "Puebla", "Pantitlán" ];

        for (let contador = 0; contador < nombresEstaciones.length; contador++) {
            this.agregarEstaciones(new Estacion(nombresEstaciones[contador]));
        }
    }
    buscador(numeroPosicion: number): number | undefined {
        let indice = this.primerEstacion;
        let contador = 1;

        while (indice != undefined && contador != numeroPosicion) {
            indice = indice.getSiguienteEstacion();
            contador++;
        }
        if (indice?.nombre != undefined) {
            return contador;
        } else {
            return undefined;
        }
    }

    calculaestaciones(estacionUno: number, estacionDos: number): number | undefined {
        let estacionBuscada = this.buscador(estacionUno)
        let segundaEstacionBuscada = this.buscador(estacionDos)
        let estacionesFaltantes = 0
        if (estacionBuscada != undefined && segundaEstacionBuscada != undefined) {
                estacionesFaltantes = segundaEstacionBuscada - estacionBuscada
                return estacionesFaltantes
        }
        return undefined
    }
}