import { Vehiculo } from "./vehiculo-entity"
import { Maritimo } from "../interface/maritimo-interface"

export class Barco extends Vehiculo implements Maritimo {
    acelerar(): void{
      this.velocidad += 30
      this.nivelDeCombustible -= 8
      console.log(`Barco acelera a ${this.velocidad} km/h y de combustible tiene ${this.nivelDeCombustible}%`)
    }
    frenar(): void {
      this.velocidad = Math.max(0, this.velocidad - 20)
      console.log(`Barco reduce velocidad a ${this.velocidad} km/h`)
    }
    flotar(): void {
      console.log("El barco flota sobre el agua de manera estable")
    }
    navegar(distancia: number): void {
      this.posicion += distancia
      this.nivelDeCombustible -= distancia * 0.3
      console.log(`Barco navega ${distancia} km. Posicion total ${this.posicion} km, combustible ${this.nivelDeCombustible}%`)
    }
    anclar(): void {
      this.velocidad = 0
      console.log("Barco anclado. Velocidad 0 km/h")
    }
    atracar(puerto: string): void {
      this.velocidad = 0
      console.log(`Barco atraca en el puerto ${puerto}`)
    }
    detectarOleaje(nivel: number): void {
      this.velocidad = Math.max(0, this.velocidad - nivel*5)
      console.log(`Oleaje nivel ${nivel}. Velocidad ajustada a ${this.velocidad} km/h`)
    }
}