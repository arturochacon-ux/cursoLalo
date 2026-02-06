import { Automovil } from "./entity/automovil-entity";
import { Avion } from "./entity/avion-entity";
import { Vehiculo } from "./entity/vehiculo-entity";
import { tipoDeCarga } from "./enum/tipoDeCargaEnum";
import { tipoDeCombustible } from "./enum/tipoDeCombustible-enum";

//console.log (automovil2)
//automovil2.calcularVelocidad(50, 10)
//automovil2.acelerar()
//automovil2.frenar()

let listaDeVeiculos: Vehiculo [] = [new Automovil(true, 2, true, "nissan", "tsuru", 100, 4, tipoDeCarga.pasajeros, tipoDeCombustible.GASOLINA,), 
    new Avion("boing", "1600", 3506, 2, tipoDeCarga.carga, tipoDeCombustible.JET_A)]
for(const posicion of listaDeVeiculos){
    posicion.acelerar
}

