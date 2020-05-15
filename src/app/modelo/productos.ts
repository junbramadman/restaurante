export class Productos {
    constructor(public titulo: string, public descripcion: string, public precio: number){}

    toString(): string{
        return this.titulo + ' ' + this.descripcion + ' ' + this.precio;
    }
}
