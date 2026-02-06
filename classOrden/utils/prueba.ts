
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
/*
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

/*
abstract class MiError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

class ColorDuplicado extends MiError {
    statusCode: number = 404;
    propiedad1 = "Ya se encuentra el color en la lista";

    constructor(message: string) {
        super(message);
    }
}

class ListaVacia extends MiError {
    statusCode: number = 101;
    propiedad2 = "Agregue un color a la lista";

    constructor(message: string) {
        super(message);
    }  
}

class Lista {
    listaDeColores: string[] = [];

    guardaColores(palabra: string): void {
        for (const contador of this.listaDeColores) {
            if (palabra === contador) {
                throw new ColorDuplicado("El color ya existe: " + palabra);
            }
        }
        this.listaDeColores.push(palabra);
        console.log("Se agregó a la lista la palabra " + palabra);
    }

    mostrarColores(): void {
        if (this.listaDeColores.length === 0) {
            throw new ListaVacia("La lista está vacía");
        }
        for (const indice of this.listaDeColores) {
            console.log(indice);
        }
    }
}

const listas = new Lista();

try { 
    listas.mostrarColores();
    listas.guardaColores("rojo");; 
} catch (error) {
    if (error instanceof ColorDuplicado) {
        console.log(error.propiedad1 + error.message + " " +error.statusCode);
    } else if (error instanceof ListaVacia) {
        console.log(error.propiedad2 + " " + error.message + " " + error.statusCode);
    } 
} finally {
    console.log("fin del codigo")
}


function registroError(error: unknown) {
  if (error instanceof MiError) {
    switch (error.statusCode) {
      case 404:
        console.log(`Código de error ${error.statusCode}: ${error.message}`);
        break

      case 101:
        console.log(`Código de error ${error.statusCode}: ${error.message}`);
        break

      default
    }


    if (error instanceof ColorDuplicado) {
      console.log(error.propiedad1);
    } else if (error instanceof ListaVacia) {
      console.log(error.propiedad2);
    }
  } 
}


try {
  listas.mostrarColores()
  listas.guardaColores("rojo")
} catch (error) {
  registroError(error)
} finally {
  listas.mostrarColores()
}npm

import scanf from "scanf"

console.log("Hola, cual es tu nombre?")

const entradaDeTexto = scanf("%s")
console.log("Hola " + entradaDeTexto)
*/
