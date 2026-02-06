import { OperacionMatematicaBasica } from "../enums/enum-operacionMatematica";

export class ProcesadorDeStrigs {

    //Suma [5 + 6], resta [5 - 6], multiplicacion [5 * 6] y división [5 / 6]
    realizarOperacionBasica(operacionARalizar: string): number | undefined {

        var tipoOperacion:OperacionMatematicaBasica = this.obtenerTipoOperacion(operacionARalizar);

        if (tipoOperacion && tipoOperacion != OperacionMatematicaBasica.NA) {
            
            switch (tipoOperacion) {
                case OperacionMatematicaBasica.SUMA: return this.sumar(operacionARalizar);
                    break;

                case OperacionMatematicaBasica.RESTA: return this.restar(operacionARalizar);
                    break;

                case OperacionMatematicaBasica.MULTIPLICACION: return this.multiplicar(operacionARalizar);
                    break;

                case OperacionMatematicaBasica.DIVISION: return this.dividir(operacionARalizar);
                    break;
            }
        } else {
            console.log('La operacion no es valida');
        }
        return undefined;
    }

    private sumar(operacionARalizar: string): number {
        var arregloOperandosYOperadores: string[] = operacionARalizar.split('+');

        return Number.parseInt(arregloOperandosYOperadores[0]) + Number.parseInt(arregloOperandosYOperadores[1]);
    }

    private restar(operacionARalizar: string): number {
        var arregloOperandosYOperadores: string[] = operacionARalizar.split('-');

        return Number.parseInt(arregloOperandosYOperadores[0]) - Number.parseInt(arregloOperandosYOperadores[1]);
    }

    private multiplicar(operacionARalizar: string): number {
        var arregloOperandosYOperadores: string[] = operacionARalizar.split('*');

        return Number.parseInt(arregloOperandosYOperadores[0]) * Number.parseInt(arregloOperandosYOperadores[1]);
    }

    private dividir(operacionARalizar: string): number {
        var arregloOperandosYOperadores: string[] = operacionARalizar.split('/');

        return Number.parseInt(arregloOperandosYOperadores[0]) / Number.parseInt(arregloOperandosYOperadores[1]);
    }

    private obtenerTipoOperacion (operacionARalizar: string): OperacionMatematicaBasica {

        var arregloOperandosYOperadores: string[];

        arregloOperandosYOperadores = operacionARalizar.split('+');

        if (arregloOperandosYOperadores && arregloOperandosYOperadores.length > 1) {
            return OperacionMatematicaBasica.SUMA
        } else {

            arregloOperandosYOperadores = operacionARalizar.split('-');
            if (arregloOperandosYOperadores && arregloOperandosYOperadores.length > 1) {
                return OperacionMatematicaBasica.RESTA
            } else {

                arregloOperandosYOperadores = operacionARalizar.split('*');
                if (arregloOperandosYOperadores && arregloOperandosYOperadores.length > 1) {
                    return OperacionMatematicaBasica.MULTIPLICACION
                } else {
                    arregloOperandosYOperadores = operacionARalizar.split('/');
                    if (arregloOperandosYOperadores && arregloOperandosYOperadores.length > 1) {
                        return OperacionMatematicaBasica.DIVISION
                    }
                }
            }
        }

        return OperacionMatematicaBasica.NA;
    }
}
