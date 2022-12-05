import { models } from "../models.js"

export class ModeloPieza{

    constructor(numero){
        this.modelo = numero
        this.angulo = 0
        this.matriz = [models[this.modelo].matriz[0]]
        this.x = 0
        this.y = 0
        this.longitud = this.matriz[this.angulo].length
        this.altura = this.matriz

        console.log(this.altura)

    }

    //Definimos el metodo girar
    girar = ()=>{

    }


}