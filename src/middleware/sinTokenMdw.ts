import { NextFunction, Request, Response } from "express";
import { db } from "../connections/ormConfig";
import { Dominio } from "../entities/Dominio";
import Boom from "@hapi/boom";

export const sinTokenMdw = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dominio = req.hostname;
    const existeDominio = await db
      .getRepository(Dominio)
      .findOne({ where: { dominio } });

    if (!existeDominio) throw Boom.notFound(`No existe el dominio: ${dominio}`);

    if (existeDominio.estado === "I")
      throw Boom.badRequest(
        `El dominio ${dominio} se encuentra inactivo, consulte con el administrador.`
      );

    next();
  } catch (error) {
    next(error);
  }
};
