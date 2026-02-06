import { Alumnoo } from "./alumno-enyti";
import { Lista } from "./listaAlimnos-antyti";
import { GestorFecha } from "./gestorFecha-entyti";
/*
let lista = new Lista ()

let alimno1 = new Alumnoo("chuchita", new Date ())
let alumno2 = new Alumnoo ("florecita", new Date ())
lista.guardarAlumno(alimno1)

lista.guardarAlumno(alumno2)

lista.ejecutarprograma()

let gestorFecha = new GestorFecha()
gestorFecha.validacionDeAnio()
var fecha = gestorFecha.crearFechaDeNacimiento()
console.log(fecha)
*/
let gestorFecha = new GestorFecha()
gestorFecha.calcularEdad()
