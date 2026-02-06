import { Vehiculo } from "./vehiculo-entity"
import { Aereo } from "../interface/aereo-interface"

export class Avion extends Vehiculo implements Aereo {
    private altura: number = 0

    acelerar(): void{
      this.velocidad += 100
      this.nivelDeCombustible -= 10
      console.log(`Avion acelera a ${this.velocidad} km/h, y su combustible es de ${this.nivelDeCombustible}%`)
    }
    frenar(): void {
      this.velocidad = Math.max(0, this.velocidad - 50)
      console.log(`Avion reduce velocidad a ${this.velocidad} km/h`)
    }
    despegar(): void {
      if(this.velocidad >= 200){
        this.altura += 1000
        console.log(`Avion despega. Altura actual ${this.altura} m`)
      } else {
        console.log("El avion necesita mas velocidad para despegar")
      }
    }
    aterrizar(): void {
      this.altura = 0
      this.velocidad = 50
      console.log(`Avion aterriza suavemente. Altura ${this.altura} m, velocidad ${this.velocidad} km/h`)
    }
    volar(distancia: number): void {
      if(this.altura > 0){
        this.posicion += distancia
        this.nivelDeCombustible -= distancia * 0.5
        console.log(`Avion vuela ${distancia} km. Posicion total ${this.posicion} km, combustible ${this.nivelDeCombustible}%`)
      } else {
        console.log("El avion no puede volar mientras esta en tierra")
      }
    }
    planear(): void {
      if(this.altura > 0){
        this.altura -= 100
        this.velocidad -= 20
        console.log(`Avion planea. Altura ${this.altura} m, velocidad ${this.velocidad} km/h`)
      }
    }
}
