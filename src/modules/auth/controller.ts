import Boom from "@hapi/boom";

import { ParametrosRepository } from "../parametros/repository";
import { application } from "../../environments";
import { SignInBodyI } from "../../interfaces/signIn.Interface";
import moment from "moment";

export const signIn = async (usuario: SignInBodyI) => {
    try {
        const paramMayorEdad = await ParametrosRepository.findOne({where: {codigo: application.EDAD_LIMITE}})
        if(!paramMayorEdad) throw Boom.badImplementation(`No existe el parametro EDAD_LIMITE`)

        const fechaNacimiento = moment(usuario.fechaNacimiento).format('YYYY-MM-DD');
        const edad = moment().diff(fechaNacimiento, 'years')

        if(Number(paramMayorEdad.valor) >= edad) throw Boom.badData('No te puedes registrar si eres menor de edad');

        console.log(edad)

    } catch (error) {
        throw Boom.badImplementation('Ocurrio un problema con el servidor.')
    }
}