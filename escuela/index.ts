import { Historial } from "./entity/historial-entity";
import { Alumno }  from "./entity/alumno-entity";
import { AlumnoDuplicado } from "../mensaje-entity.ts";
import { Calificacion } from "../classOrden/enums/enum-calificaciones.ts";
import { Grado } from "./enum-grado.js";
import { Materia } from "./enum-materias.js";

let historial = new Historial();

let juan = new Alumno("juan", "banano", "10/11/20", "jb00", historial);
let cajeto = new Alumno("cajeto", "corona", "15/01/21", "cns", historial);
let pacman = new Alumno("pacman", "loco", "12/05/21", "pz48", historial);

pacman.agragarNotas(Grado.Primero, Materia.Espaniol, Calificacion.Siete);
pacman.agragarNotas(Grado.Primero, Materia.Historia, Calificacion.Ocho);
pacman.agragarNotas(Grado.Primero, Materia.Fisica, Calificacion.Nueve);

juan.agragarNotas(Grado.Primero, Materia.Espaniol, Calificacion.Diez);
juan.agragarNotas(Grado.Primero, Materia.Historia, Calificacion.Diez);
juan.agragarNotas(Grado.Primero, Materia.Fisica, Calificacion.Diez);
juan.agragarNotas(Grado.Primero, Materia.Matematicas, Calificacion.Siete);

cajeto.agragarNotas(Grado.Segundo, Materia.Fisica, Calificacion.Diez);

historial.promedioPorGrado("jb00", Grado.Primero);

historial.mostrarAlumnos()
let alumno0 = new Alumno("pepe", "pelotas", "18/09/2020", "pplotas09", historial)
alumno0.mostrarInfoAlumno()
//historial.busacadorDeAlumnos("pplotas09")