
import { Linea } from "./entytis/linaDelMetro-entity";


export let lineasMetro = new Map<number, string[]>();
lineasMetro.set(1, ["Observatorio", "Tacubaya", "Juanacatlan", "Chapultepec", "Sevilla", "Insurgentes", "Cuauhtemoc", "Balderas", "Salto del agua", "Isabel la catolica", "Pino suarez", "Merced", "Candelaria", "San lazaro", "Moctezuma", "Balbuena", "Boulevard puerto aereo", "Gomez farias", "Zaragoza", "Pantitlan"])
lineasMetro.set(2, ["Cuatro caminos", "Panteones", "Tacuba", "Cuitlahuac", "Popotla", "Colegio militar", "Normal", "San cosme", "Revolucion", "Hidalgo", "Bellas artes", "Allende", "Zocalo", "Pino suarez", "San antonio abad", "Chabacano", "Viaducto", "Xola", "Villa de cortes", "Nativitas", "Portales", "Ermita", "General anaya", "Taxquena"])
lineasMetro.set(3, ["Indios verdes", "Deportivo 18 de marzo", "Potrero", "La raza", "Tlatelolco", "Guerrero", "Hidalgo", "Juarez", "Balderas", "Ninos heroes", "Hospital general", "Centro medico", "Etiopia", "Eugenia", "Division del norte", "Zapata", "Coyoacan", "Viveros", "Miguel angel de quevedo", "Copilco", "Universidad"])
lineasMetro.set(4, ["Martin carrera", "Talisman", "Bondojito", "Consulado", "Canal del norte", "Morelos", "Candelaria", "Fray servando", "Jamaica", "Santa anita"])
lineasMetro.set(5, ["Politecnico", "Instituto del petroleo", "Autobuses del norte", "La raza", "Misterios", "Valle gomez", "Consulado", "Eduardo molina", "Aragon", "Oceania", "Terminal aerea", "Hangares", "Pantitlan"])
lineasMetro.set(6, ["El rosario", "Tezozomoc", "Azcapotzalco", "Ferreria", "Norte 45", "Vallejo", "Instituto del petroleo", "Lindavista", "Deportivo 18 de marzo", "La villa-basilica", "Martin carrera"])
lineasMetro.set(7, ["El rosario", "Aquiles serdan", "Camarones", "Refineria", "Tacuba", "San joaquin", "Polanco", "Auditorio", "Constituyentes", "Tacubaya", "San pedro de los pinos", "San antonio", "Mixcoac", "Barranca del muerto"])
lineasMetro.set(8, ["Garibaldi", "Bellas artes", "San juan de letran", "Salto del agua", "Doctores", "Obrera", "Chabacano", "La viga", "Santa anita", "Coyuya", "Iztacalco", "Apatlaco", "Aculco", "Escuadron 201", "Atlalilco", "Iztapalapa", "Cerro de la estrella", "Uam-i", "Constitucion de 1917"])
lineasMetro.set(9, ["Tacubaya", "Patriotismo", "Chilpancingo", "Centro medico", "Lazaro cardenas", "Chabacano", "Jamaica", "Mixiuhca", "Velodromo", "Ciudad deportiva", "Puebla", "Pantitlan"])
lineasMetro.set(12, ["Mixcoac", "Insurgentes sur", "Hospital 20 de noviembre", "Zapata", "Parque de los venados", "Eje central", "Ermita", "Mexicaltzingo", "Atlalilco", "Culhuacan", "San andres tomatlan", "Lomas estrella", "Calle 11", "Periferico oriente", "Tezonco", "Olivos", "Nopalera", "Zapotitlan", "Tlaltenco", "Tlahuac"])

export class Creador {
    linea: Map<number, string[]>
    todoMetro: Map<string, Linea>

    constructor(linea: Map<number, string[]>) {
        this.linea = linea
        this.todoMetro = new Map<string, Linea>();
    }

    creaobjetos() {
        let key
        for ([key] of this.linea) {
            console.log(key)
            if (key) {
                let estaciones = this.linea.get(key)
                for (let k of estaciones) {
                    let objeto = new Linea(k)
                    //console.log("ya cree " + objeto.estacion)
                    if (this.todoMetro.has(objeto.estacion) == true) {
                        //console.log("ya existe " + objeto.estacion + " en el mapa")
                    } else {

                        this.todoMetro.set(objeto.estacion, objeto)
                    }
                }
            }
        }

    }

    conectaEstaciones() {
        for (let [key] of this.linea) {
            let estaciones = this.linea.get(key)
            console.log(estaciones)
            if (estaciones) {
                for (let i = 1; i < estaciones.length; i++) {
                    //console.log(estaciones[i])
                    let estacion1 = this.todoMetro.get(estaciones[i])
                    let estacion = this.todoMetro.get(estaciones[i - 1])
                    //if (estacion != undefined && estacion1 != undefined) {
                    //  console.log("estoy en   " + estacion.estacion+ " y las estaciones adeacentes son : ")
                    //console.log(estacion?.estacion + " esta conectada con : " + estacion1?.estacion)
                    estacion?.agregarEstacion(estacion1)
                    estacion1?.agregarEstacion(estacion)
                    estacion?.mostrarEstacion()
                }
            }

        }
    }


    mostrarEstaciones() {
        for (let [key] of this.todoMetro) {
            let estacion = this.todoMetro.get(key)
            console.log("me encunetro en " + estacion?.estacion + " y estas son " + estacion?.colindaCon.length)
            //console.log("estas son las estaciones que colindan con " + estacion?.estacion)

            estacion?.mostrarEstacion()
        }
    }

    inprimeLlaves() {
        for (let [i] of this.linea)
            console.log("linea " + i)

    }
    getEstaciones(key: number): string[] | undefined {
        return this.linea.get(key)
    }

    obtenObjeto(nombre : string) {
        return this.todoMetro.get(nombre)
    }

    buscadorEstacion(key: number, estacion : number): string | undefined{
        let linea = this.linea.get(key)
        if (linea) {
        for (let i = 0; i < linea.length; i++){
            if ( i == estacion-1 ){
                console.log(linea[i])
                return linea[i]
            }
        }
    }
    }
}



