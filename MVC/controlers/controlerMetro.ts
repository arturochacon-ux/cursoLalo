
import { LineaCafe } from "../entytis/lineaCafe-entyti"
import { Menu } from "../vista/menu"

export class Controlador {

    miLineaCafe = new LineaCafe()
    miMenu = new Menu()

    contraloador() {
        this.miLineaCafe.crearEstaciones()
        let opcion = 0
        this.miMenu.bienvenida()
        do {
            this.miMenu.menuPrincipal()
            opcion = this.miMenu.entradaDeOpciones()
            this.accionARealizar(opcion)
        }
        while (opcion != 0) {
            this.miMenu.despedida()
        }

    }

    accionARealizar(opcion: number) {
        if (opcion != undefined && opcion != 0) {
            switch (opcion) {
                case 1:
                    this.miMenu.mostrar()
                    this.miLineaCafe.mostrar()
                    break;

                case 2:
                   // this.espacionWEntreEstaciones()
                    break;

                default:
                    this.miMenu.error()
                    break;
            }
        }
    }

    espacionWEntreEstaciones(meEncuentro:number, voyA:number) {
        //let meEncuentro = this.miMenu.ingresaEstacionUno()
        //let voyA = this.miMenu.ingresaEstacionDos()
        let estacionesFaltantes = this.miLineaCafe.calculaestaciones(meEncuentro, voyA)
        this.miMenu.estacionesFaltantes(estacionesFaltantes)
    }
}
