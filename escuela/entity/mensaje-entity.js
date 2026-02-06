"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoNoEncontradoExcepcion = void 0;
var miExcepcion_entity_1 = require("./miExcepcion-entity");
var AlumnoNoEncontradoExcepcion = /** @class */ (function (_super) {
    __extends(AlumnoNoEncontradoExcepcion, _super);
    function AlumnoNoEncontradoExcepcion(mensaje) {
        var _this = _super.call(this, mensaje) || this;
        _this.statusCode = 404;
        _this.name = "No se encontro el alumno";
        return _this;
    }
    return AlumnoNoEncontradoExcepcion;
}(miExcepcion_entity_1.MiExcepcion));
exports.AlumnoNoEncontradoExcepcion = AlumnoNoEncontradoExcepcion;
