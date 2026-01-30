
class Persona {
    nombre: string
    apellidoPaterno: string
    apellidoMaterno: string
    personasAlado: Persona[]

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.personasAlado = []
    }

    nombreCompleto (): string {
        return this.nombre + " " + this.apellidoPaterno + " " + this.apellidoMaterno
    }

    agragarpersona(persona: Persona) {
        this.personasAlado.push(persona);
    }
    mostrarVecinos() {
        console.log ("la persona que se encuentra alado de " + this.nombreCompleto() + "  son: ")
        for(let contador of this.personasAlado) {
            console.log(contador.nombreCompleto())
        }
    }
    
}
let persona1 = new Persona("Liz", "Avila", "Camacho")
let persona2 = new Persona("Jose", "Soreano", "Shakira")
let persona3 = new Persona("Arturo", "Chacon", "Serrano")
let persona4 = new Persona("Omar", "olvera", "Shakira")
let persona5 = new Persona("Cesar", "Fuentes", "Herrera")

persona1.agragarpersona(persona2)

persona2.agragarpersona(persona1)
persona2.agragarpersona(persona3)

persona3.agragarpersona(persona2)
persona3.agragarpersona(persona4)

persona4.agragarpersona(persona3)
persona4.agragarpersona(persona5)

persona5.agragarpersona(persona4)

persona1.mostrarVecinos()
persona2.mostrarVecinos()
persona3.mostrarVecinos()

//persona2.encontrarMejorRuta(persona4, new Array(), undefined)





