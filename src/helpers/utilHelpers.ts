import { Request, Response } from 'express';
import { ResponseHelperI } from '../interfaces/response.interface';
import { CodigosHttpEnum } from '../enums/codesHttpEnum';


export namespace responseHelper {

    export const success = (res: Response, message?: string ,data?: any) => {
        let response: ResponseHelperI<null> = {
            msj: message?? 'Exito en la transacción',
            tokenValido: false,
            data
        }
        res.status(CodigosHttpEnum.ok).send(response)
    } 

    export const errors = (res: Response, codeError: number , msg?: string, info?: any)=> {
        let response: ResponseHelperI<null> = {
            msj: msg ?? 'Error en la transacción',
            codigo: codeError,
            info
        }
        res.status(codeError).send(response)
    }
}