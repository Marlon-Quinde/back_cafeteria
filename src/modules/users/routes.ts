import { NextFunction, Request, Response, Router } from "express";
import { PersonaI } from "../../interfaces/persona.interface";
import {
  createUser,
  getAllUsers,
  getUsersApiJsonPlaceHolder,
} from "./controller";
import { UsersQueryParams } from "../../interfaces/user.interface";
import { Usuario } from "../../entities/Usuario";
import { sinTokenMdw } from "../../middleware/sinTokenMdw";
import { responseHelper } from "../../helpers/utilHelpers";
import { validate } from "express-validation";
import { createUserValidations } from "./validation";
const routes = Router();

routes.get("/all", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await getUsersApiJsonPlaceHolder();
    res.json(response);
  } catch (error) {
    throw error;
  }
});

routes.get(
  "/database",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params: UsersQueryParams = req.query ;
      const response = await getAllUsers(params.filtro, params.estado);
      res.json(response);
    } catch (error) {
      throw error;
    }
  }
);

routes.post(
  "/create",
  validate(createUserValidations),
  sinTokenMdw,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: Usuario = req.body;
      const response = await createUser(res , body);
      responseHelper.success(res, "Usuario creado con éxito", response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

export default routes;
