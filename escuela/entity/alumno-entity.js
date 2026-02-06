"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, fechaDeNacimiento, numeroDeMatricula, historial) {
        this.notas = [];
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.numeroDeMatricula = numeroDeMatricula;
        this.historial = historial;
        this.notas = [];
        // este metodo inscrive el alumno dentro de historial dentro de la lista de alumnos
        var is = false;
        for (var _i = 0, _a = this.historial.listaAlumnos; _i < _a.length; _i++) {
            var contador = _a[_i];
            if (this.numeroDeMatricula === contador.numeroDeMatricula) {
                is = true;
            }
        }
        if (is != true) {
            this.historial.listaAlumnos.push(this);
        }
    }
    // muestra la informacion del alumno
    Alumno.prototype.mostrarInfoAlumno = function () {
        console.log("\nmi nombre es ".concat(this.nombre, " ").concat(this.apellido, " naci el ").concat(this.fechaDeNacimiento, " y mi matricula es ").concat(this.numeroDeMatricula));
    };
    // agraga la notas del alumno, le tenemos que pasar como parametro grado, materia, calificasion, 
    Alumno.prototype.agragarNotas = function (grado0, materia, calificacion) {
        var contador = 0;
        //recorre la lista de notas que se tiene, verifica que no exista una calificasion del mismo grado y del misma materia
        // si no existe la calificasion de esa materia y de ese grado se guarda la calificasion
        while (contador < this.notas.length) {
            if (grado0 === this.notas[contador].grado) {
                if (materia === this.notas[contador].materia) {
                    console.log("el alumno ya tiene una calificasion en esa materia");
                    break;
                }
            }
            contador++;
        }
        this.notas.push({ grado: grado0, materia: materia, calificacion: calificacion });
    };
    return Alumno;
}());
exports.Alumno = Alumno;
