import { Vehiculo } from "./vehiculo-entity"
import { Maritimo } from "../interface/maritimo-interface"
import { Terrestre } from "../interface/terrestre-interface"

export class TanqueAnfibio extends Vehiculo implements Maritimo, Terrestre {
    private altura: number = 0

    acelerar(): void{
      this.velocidad += 15
      this.nivelDeCombustible -= 7
      console.log(`Tanque acelera a ${this.velocidad} km/h, combustible ${this.nivelDeCombustible}%`)
    }
    frenar(): void {
      this.velocidad = Math.max(0, this.velocidad - 10)
      console.log(`Tanque reduce velocidad a ${this.velocidad} km/h`)
    }
    flotar(): void {
      console.log("Tanque anfibio flotando en el agua")
    }
    navegar(distancia: number): void {
      this.posicion += distancia
      this.nivelDeCombustible -= distancia * 0.4
      console.log(`Tanque navega ${distancia} km. Posición total ${this.posicion} km, combustible ${this.nivelDeCombustible}%`)
    }
    anclar(): void {
      this.velocidad = 0
      console.log("Tanque anclado en el agua. Velocidad 0 km/h")
    }
    atracar(puerto: string): void {
      console.log(`Tanque anfibio atraca en el puerto ${puerto}`)
    }
    detectarOleaje(nivel: number): void {
      this.velocidad = (this.velocidad - nivel*3)
      console.log(`Oleaje nivel ${nivel}. Velocidad ajustada a ${this.velocidad} km/h`)
    }
    calcularVelocidad(distancia: number, tiempo: number): void {
      let v = distancia / tiempo
      console.log(`Velocidad promedio del tanque: ${v} km/h`)
    }
    desplazarsePorTierra(): void{
      this.posicion += this.velocidad / 2
      this.nivelDeCombustible -= 3
      console.log(`Tanque se desplaza por tierra. Posición ${this.posicion} km, combustible ${this.nivelDeCombustible}%`)
    }
    frenarEnSeco(): void {
      this.velocidad = 0
      console.log("Tanque frena en seco. Velocidad 0 km/h")
    }
}
