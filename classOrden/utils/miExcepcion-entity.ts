
export abstract class MiExcepcion extends Error {
    abstract statusCode: number;

    constructor(message :string) {
        super (message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}


