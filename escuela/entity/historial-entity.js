"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Historial = void 0;
var enum_grado_js_1 = require("../enum-grado.js");
var mensaje_entity_js_1 = require("./mensaje-entity.js");
var Historial = /** @class */ (function () {
    // el historial tiene una propiedad de lista de alumnos donde se gaudan todos los alumnos que se encuentran inscritos en cualquier grupo
    function Historial() {
        this.listaAlumnos = [];
    }
    // muestra los alumnos inscritos, recorriendo toda la lista solo se imprime el nombre
    Historial.prototype.mostrarAlumnos = function () {
        var contador = 0;
        while (contador < this.listaAlumnos.length) {
            console.log(this.listaAlumnos[contador].nombre);
            contador++;
        }
    };
    //este metodo busca alumnos por matricula recorriendo toda la lista de alumnos que se encuentran en si lo encuentr regresa el objeto
    //alumno y si no lo encuantra retorna un undefined 
    Historial.prototype.busacadorDeAlumnos = function (matriculaDeAlumno) {
        var contador = 0;
        while (contador < this.listaAlumnos.length) {
            if (matriculaDeAlumno === this.listaAlumnos[contador].numeroDeMatricula) {
                return this.listaAlumnos[contador];
            }
            contador++;
        }
        // Si no encontró nada, lanza excepción personalizada
        throw new mensaje_entity_js_1.AlumnoNoEncontradoExcepcion("No se encontró el alumno");
    };
    //este metosdo se le pasa el numero de matricula del alumno, 
    Historial.prototype.promedioGeneralPorAlumno = function (matricula) {
        var contador = 0;
        var notas = 0;
        var alumnoEncontrado = this.busacadorDeAlumnos(matricula);
        if (alumnoEncontrado != undefined) {
            while (contador < alumnoEncontrado.notas.length) {
                notas += alumnoEncontrado.notas[contador].calificacion;
                contador++;
            }
            return notas / contador;
        }
        console.log("el promediogeneral del alumno es de " + notas / contador);
    };
    Historial.prototype.promedioPorGrado = function (matricula, grados) {
        var obtenerAlumno = this.busacadorDeAlumnos(matricula);
        var calificacion = 0;
        var contador2 = 0;
        if (obtenerAlumno != undefined) {
            for (var contador = 0; contador < obtenerAlumno.notas.length; contador++) {
                if (grados === obtenerAlumno.notas[contador].grado) {
                    contador2++;
                    calificacion += obtenerAlumno.notas[contador].calificacion;
                }
            }
            return calificacion / contador2;
        }
        else {
            console.log("el alumno no se esncuentra con esa matricula");
        }
    };
    Historial.prototype.alumnoDestacadoGeneral = function () {
        var contador = 0;
        var calificaciones = 0;
        var alumnoDestacado = [];
        while (contador < this.listaAlumnos.length) {
            var promedio = this.promedioGeneralPorAlumno(this.listaAlumnos[contador].numeroDeMatricula);
            if (promedio != undefined && promedio > calificaciones) {
                calificaciones = promedio;
                alumnoDestacado = [this.listaAlumnos[contador].nombre];
            }
            else if (promedio === calificaciones) {
                alumnoDestacado.push(this.listaAlumnos[contador].nombre);
            }
            contador++;
        }
        contador = 0;
        while (alumnoDestacado.length > 0) {
            console.log("el mejor prome dio es de el alumno" +
                alumnoDestacado[contador] +
                " con promedio " +
                calificaciones);
            contador++;
        }
    };
    Historial.prototype.mejorAlumnoPorGrado = function (grado) {
        var mejorPromedio = 0;
        var alumnosDestacados = [];
        for (var _i = 0, _a = this.listaAlumnos; _i < _a.length; _i++) {
            var alumno = _a[_i];
            var suma = 0;
            var contador = 0;
            for (var _b = 0, _c = alumno.notas; _b < _c.length; _b++) {
                var nota = _c[_b];
                if (nota.grado === grado) {
                    suma += nota.calificacion;
                    contador++;
                }
            }
            var promedio = suma / contador;
            if (promedio > mejorPromedio) {
                mejorPromedio = promedio;
                alumnosDestacados = [alumno.nombre];
            }
            else if (promedio === mejorPromedio) {
                alumnosDestacados.push(alumno.nombre);
            }
        }
        console.log("Mejor promedio del grado ".concat(enum_grado_js_1.Grado[grado], ": ").concat(mejorPromedio));
        console.log("Alumno(s): ".concat(alumnosDestacados));
    };
    return Historial;
}());
exports.Historial = Historial;
