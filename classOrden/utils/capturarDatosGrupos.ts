import scanf from "scanf"
import { ListaDeAlumnos } from "../controlers/listaDeAlumnos-entity"
import { Grupo } from "../models/grupo-entity"
import { CrearGrupo } from "../controlers/creadorGrupos"
import { ListaDeGrupos } from "../controlers/listaDeGrupos-entity"
import { CapturarDatosAlumnos } from "./capturarDatosAlumnos"
import { Alumno } from "../models/alumno-entity"
export class CapturarDatosGrupos {

    capturarDatosAlumno: CapturarDatosAlumnos
    //private listaDeAlumnos: ListaDeAlumnos
    private listaGrupos: ListaDeGrupos
    //private opcion: number = 0
    private entradaGrupo: any


    constructor(listaDeGrupos: ListaDeGrupos, capturarDatosAlumno: CapturarDatosAlumnos) {
        this.listaGrupos = listaDeGrupos
        //this.listaDeAlumnos = listaDeAlumnos
        this.capturarDatosAlumno = capturarDatosAlumno
    }


    accionesDeGrupos(opcion: number) {
        if (opcion != 0) {
            switch (opcion) {
                case 1:
                    let crearGrupo = new CrearGrupo()
                    let hora = crearGrupo.validacionHorasTotales()
                    let cupo = crearGrupo.vlaidacionCupoTemporal()
                    let grado = crearGrupo.seleccionarGrado()
                    let materia = crearGrupo.seleccionarMateria()
                    console.log("Ingrese la matricula del nuevo grupo")
                    let id = scanf("%s")
                    let nuevoGrupo = new Grupo(materia, id, hora, cupo, grado)
                    console.log("creaste un nuevo grupo " + nuevoGrupo.idGrupo)
                    this.listaGrupos.guardarGrupo(nuevoGrupo)
                    break;

                case 2:
                    this.listaGrupos.mostrarGrupos()
                    break;

                case 3:
                    if (this.listaGrupos.listaDeGrupos.length != 0) {
                        console.log("selecciona el grupo")
                        console.log("ingrese la id del grupo")
                        this.listaGrupos.eliminarGrupo(scanf("%s"))
                    } else {
                        console.log("aun no hay grupos creados")
                    }
                    break;

                case 4:
                    if (this.listaGrupos.listaDeGrupos.length != 0) {
                        console.log("digita la matricula del grpo al cual quieres entrar")
                        let grupp = this.listaGrupos.buscadorDeGrupos(scanf("%s"))
                        grupp?.listaDeAlumnos.mostrarAlumnos()
                    } else {
                        console.log("anu no hay grupos creados")
                    }
                    break;

                case 5:
                    if (this.listaGrupos.listaDeGrupos.length != 0) {
                        console.log("digita la matricula del grpo al cual quieres entrar")
                        this.listaGrupos.mostrarGrupos()
                        //let grupp = this.listaGrupos.buscadorDeGrupos(scanf("%s"))
                        //let migrupo = grupp?.agregarAlumno()
                        //this.capturarDatosAlumno.ejecutarAccion(2)

                        //let grupoEncontrado = this.listaGrupos.buscadorDeGrupos(scanf("%s"))
                           // console.log("ingrese el alumno que quiere inscribir en el grupo")
                            //this.capturarDatosAlumno.historialAlumnos.mostrarAlumnos()

                        let miLIsta = this.capturarDatosAlumno.historialAlumnos.listaAlumnos
                            for(let contador = 0; contador < miLIsta.length; contador ++){
                                console.log(miLIsta[contador].nombre)
                            }
                            //console.log("se encontro el alumno")
                          //  grupoEncontrado?.listaDeAlumnos.mostrarAlumnos()
                    } else {
                        console.log("aun no hay grupos creados")
                    }
                    break

                case 6:
                    console.log("digita la matricula del grupo al cual quieres entrar")
                    this.entradaGrupo = this.listaGrupos.validacionDeGrupos(scanf("%s"))
                    console.log("digite la matricula del alumno que desea eliminar")
                    this.entradaGrupo.listaDeAlumnos.eliminarAlumno(scanf("%s"))

                    break;

                default:
                    console.log("seleccione una opcion valida")
                    break;

            }
        }
    }


}