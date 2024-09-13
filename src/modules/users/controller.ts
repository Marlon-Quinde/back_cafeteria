import { EntityManager } from "typeorm";
import { UsersQueryParams } from "../../interfaces/user.interface";
import { UserService } from "./service";
import { User } from "../../entities/User";
import { responseHelper } from "../../helpers/utilHelpers";
import { Response } from "express";
import { CodigosHttpEnum } from "../../enums/codesHttpEnum";
import { hastPassword, verificarPassword } from "../../helpers/bcrypt";

const userService = new UserService();

export const getAllUsers = async (filtro: string, estado: string) => {
  try {
    const response = await userService.getAllUsers(filtro, estado);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUsersApiJsonPlaceHolder = async () => {
  const response = await userService.getUserApiJsonPlaceHolder();
  return response;
};

export const createUser = async (res: Response, cnx: EntityManager ,usuario: User) => {
  try {
    const identificacion = usuario.identificacion
    
    const existeUsuario = await cnx.getRepository(User).findOne({where: {identificacion}})

    if(existeUsuario) {
      console.log(await verificarPassword(usuario.password, existeUsuario.password))
      throw ''
      // responseHelper.errors(res, CodigosHttpEnum.badRequest, 'No pudo crear el usuario', `Ya existe un usuario con la identificación: ${identificacion}`)
    }
    
    usuario.password = await hastPassword(usuario.password)

    const response = await userService.createUser(cnx, usuario)
    return response
  } catch (error) {
    responseHelper.errors(res, error.status, error.message, error)
  }
}