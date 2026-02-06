/*
abstract class MisErrores extends Error {
    abstract statusCode: number
    constructor (message: string){
        super (message)
        Object.setPrototypeOf(this, new.target.prototype)
    }
}

class ColorDuplicado extends MisErrores {
    statusCode: number = 404
    propiedad1 = "ya se encuentra el color en la lista"
    constructor (message: string) {
      super(message);
    }
}

class ListaVacia extends MisErrores {
  statusCode: number = 101
  propiedad2 = "la lista esta bacia"
  constructor (menssage: string) {
    super(menssage);
  }
}

class Lista {
    listaDeColores: string [] = ["rojo", "verde", "azul"]

    buscadorDePalabras(palabra: string): void {
        for(const contador of this.listaDeColores) {
          if (palabra === contador) {
            try {
                throw new ColorDuplicado("error")
            }
            }
        }
        this.listaDeColores.push(palabra)
        console.log("se agrego a la lista la palabra "  + palabra)
    }
    mostrarColores(): void {
      if (this.listaDeColores.length ===  0){
        throw new ListaVacia("ERROR")
      }
        for (const indice of this.listaDeColores) {
            console.log(indice)
        }
    }
}


var listas = new Lista()
try {
    listas.mostrarColores()

} catch (error) {
    if (error instanceof ColorDuplicado) {
            console.log(error?.propiedad1)
    } else if (error instanceof ListaVacia) {
    console.log(error?.propiedad2)
    }
}


function registroError (error) {
  if (error instanceof MisErrores){
    switch (error.statusCode) {

      case 404: console.log(`codigo de error ${error.statusCode} : ${error.message}`)
          break;

      case 101: console.log(`codigo de error ${error.statusCode} : ${error.message}`)
          break;
      
        default:
      
    }
  }
}
*/
//listas.mostrarAlumnos()
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
var MiErrores = /** @class */ (function (_super) {
    __extends(MiErrores, _super);
    function MiErrores(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return MiErrores;
}(Error));
var ColorDuplicado = /** @class */ (function (_super) {
    __extends(ColorDuplicado, _super);
    function ColorDuplicado(message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = 404;
        _this.propiedad1 = "Ya se encuentra el color en la lista";
        return _this;
    }
    return ColorDuplicado;
}(MiErrores));
var ListaVacia = /** @class */ (function (_super) {
    __extends(ListaVacia, _super);
    function ListaVacia(message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = 101;
        _this.propiedad2 = "Agregue un color a la lista";
        return _this;
    }
    return ListaVacia;
}(MiErrores));
var Lista = /** @class */ (function () {
    function Lista() {
        this.listaDeColores = [];
    }
    Lista.prototype.guardaColores = function (palabra) {
        for (var _i = 0, _a = this.listaDeColores; _i < _a.length; _i++) {
            var contador = _a[_i];
            if (palabra === contador) {
                throw new ColorDuplicado("El color ya existe: " + palabra);
            }
        }
        this.listaDeColores.push(palabra);
        console.log("Se agregó a la lista la palabra " + palabra);
    };
    Lista.prototype.mostrarColores = function () {
        if (this.listaDeColores.length === 0) {
            throw new ListaVacia("La lista está vacía");
        }
        for (var _i = 0, _a = this.listaDeColores; _i < _a.length; _i++) {
            var indice = _a[_i];
            console.log(indice);
        }
    };
    return Lista;
}());
var listaColores = new Lista();
try {
    listaColores.mostrarColores();
    listaColores.guardaColores("rojo");
    listaColores.guardaColores("amarillo"); // prueba de agregado
}
catch (error) {
    if (error instanceof ColorDuplicado) {
        console.log(error.propiedad1 + error.message);
    }
    else if (error instanceof ListaVacia) {
        console.log(error.propiedad2 + "" + error.message);
    }
    else {
        console.log("Error inesperado: " + error);
    }
}
finally {
    console.log("fin del codigo");
}
