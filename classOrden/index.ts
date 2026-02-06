
import { MenuPrincipal } from "./views/home.views";
import { MenuCalculadora } from "./views/vistaCalculadora";
//import { MenuPrincipalView } from "./views/home.views";
/*
let inicio = new MenuPrincipalAlumnos()
inicio.ejecutarprograma()


let alumno = new CreadorAlumno()

alumno.vlidacionFechaDeNacimiento()
alumno.calcularEdad()
 
let miGrupo = new MenuPrincipalGrupos()
miGrupo.ejecutarprograma()

let menuPrimario = new MenuPrincipal
//menuPrimario.ejecutarPrograma()
try {

    menuPrimario.ejecutarPrograma()    
    
}
catch
{
    console.log("\n\n\n*******hubo un problema con la ejecusion.*******\n\n\n\n    *****Estamos trabajando...*****")
    menuPrimario.ejecutarPrograma()
}
*/

let calcula = new MenuCalculadora()

try {

    calcula.inicio()
    
}
catch
{
    console.log("\n\n\n*******hubo un problema con la ejecusion.*******\n\n\n\n    *****Estamos trabajando...*****")
    calcula.inicio()
}