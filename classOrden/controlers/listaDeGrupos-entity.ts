import { Grado } from "../enums/enum-grado";
import { Grupo } from "../models/grupo-entity";


export class ListaDeGrupos {

    listaDeGrupos: Grupo[] = []


    validacionDeGrupos(validarId: string) {
        if (this.buscadorDeGrupos(validarId) === undefined) {
            console.log("no existe un grupo com ese id")
        } else {
            return Grupo
        }
    }
    buscadorDeGrupos(id: string): Grupo | undefined {
        for (let contador = 0; contador < this.listaDeGrupos.length; contador++) {
            if (id === this.listaDeGrupos[contador].idGrupo) {
                return this.listaDeGrupos[contador]
            } else {
                return undefined
            }
        }
    }

    eliminarGrupo(matricula: Grupo["idGrupo"]) {
        let contador = 0;
        //if (this.listaDeGrupos.length === 0 ) { 
        while (contador < this.listaDeGrupos.length) {
            if (matricula === this.listaDeGrupos[contador].idGrupo) {
                this.listaDeGrupos.splice(contador)
                console.log("se elimino el alumno con la matricula: " + matricula)
            }
            contador++
        }
        console.log("no existe un alumno con esa matricula")
    }

    mostrarGrupos() {
        if (this.listaDeGrupos.length === 0) {
            console.log("aun no hay grupos creados")
        } else {
            console.log("Estos son todos los Grupos")
            let i = 1
            for (const contador of this.listaDeGrupos) {
                console.log(i++ + "-. grado: " + contador.grado + " materia: " + contador.materia + " id: " + contador.idGrupo)
            }
        }
    }
    guardarGrupo(grupo: Grupo) {
        if (grupo === this.buscadorDeGrupos(grupo.idGrupo)) {
            console.log("este grupo ya existe")
        } else {
            this.listaDeGrupos.push(grupo)
            console.log("se guardo un nuevo grupo")
        }
    }
}