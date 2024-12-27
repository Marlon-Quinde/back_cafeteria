import { Request, Response } from "express";
import { HttpResponseI } from "../interfaces/response.interface";
import { CodigosHttpEnum } from "../enums/codesHttpEnum";

export namespace HttpResponseHelper {
  export const responseDirect = <T>(
    res: Response,
    code: number,
    data: T = undefined,
    message: string = "Transacción Éxitosa",
  ) => {
    let response: HttpResponseI<T> = {
      code,
      message,
      data,
    };
    res.status(CodigosHttpEnum.ok).send(response);
  };
  export const response = <T>(
    code: number,
    message: string = "Transacción Éxitosa",
    data: T = undefined,
  ): HttpResponseI<T> => ({
    code,
    data,
    message,
  });
}
