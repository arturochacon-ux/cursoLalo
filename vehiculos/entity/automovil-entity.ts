import { Vehiculo } from "./vehiculo-entity"
import { Terrestre } from "../interface/terrestre-interface"
import { tipoDeCarga } from "../enum/tipoDeCargaEnum"
import { tipoDeCombustible } from "../enum/tipoDeCombustible-enum"

export class Automovil extends Vehiculo implements Terrestre {
    techo: boolean
    puertas: number 
    quemacocos: boolean

    constructor(techo:boolean, puertas:number, quemacocos:boolean, marca:string, modelo:string, peso:number, numeroDePasajeros:number,
      carga:tipoDeCarga, combustible:tipoDeCombustible) {
      super(marca, modelo, peso, numeroDePasajeros, carga, combustible,) 
      this.techo = techo
      this.puertas = puertas
      this.quemacocos = quemacocos
    }

    acelerar(): void{
      this.velocidad += 20
      this.nivelDeCombustible -=5
      console.log("hola estoy dentro del metodo acelerar")
      console.log(`Automóvil acelera a ${this.velocidad} km/h, combustible restante ${this.nivelDeCombustible}%`)
    }
    frenar(): void{
      this.velocidad = this.velocidad - 15
      console.log(`Automóvil frena a ${this.velocidad} km/h`)
    }
    calcularVelocidad(distancia: number, tiempo: number): void {
      let velocidad1 = distancia / tiempo
      console.log(`Velocidad promedio del automóvil: ${velocidad1} km/h`)
    }
    desplazarsePorTierra(): void{
      this.posicion += this.velocidad / 2
      console.log(`Automóvil avanza a posición ${this.posicion} km`)
    }
    frenarEnSeco(): void {
      this.velocidad = 0
      console.log("El automóvil frena en seco. Velocidad actual 0 km/h")
    }
}