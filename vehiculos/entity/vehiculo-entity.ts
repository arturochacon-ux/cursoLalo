import { tipoDeCarga } from "../enum/tipoDeCargaEnum"
import { tipoDeCombustible } from "../enum/tipoDeCombustible-enum"

export abstract class Vehiculo {
    protected marca: string
    protected modelo: string
    protected peso: number
    protected numeroDePasajeros: number
    protected carga: tipoDeCarga
    protected combustible : tipoDeCombustible 
    protected velocidad: number = 100
    protected posicion: number = 0 
    protected nivelDeCombustible: number = 100

    constructor(marca:string, modelo:string, peso:number, numeroDePasajeros:number, carga:tipoDeCarga, combustible:tipoDeCombustible) {
        this.marca = marca
        this.modelo = modelo
        this.peso = peso
        this.numeroDePasajeros = numeroDePasajeros
        this.carga = carga
        this.combustible = combustible

    }
  
    abstract acelerar(): void
    abstract frenar(): void
}