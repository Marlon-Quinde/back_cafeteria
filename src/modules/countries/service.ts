// ? Los servicios/funciones/metodos que interactuaran con la base de datos

import nuevoRepository from "./repository"


export class nuevoServicio {

    private readonly apiRepository: nuevoRepository

    constructor(){
        this.apiRepository = new nuevoRepository()
    }
    async metodoDentroDelServicio() {
        return this.apiRepository.nuevoMetodoDentroClase()
    }
}