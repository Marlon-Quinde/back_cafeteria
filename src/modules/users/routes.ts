import { NextFunction, Request, Response, Router } from "express";
import {
  createUser,
  getAllUsers,
  getUsersApiJsonPlaceHolder,
} from "./controller";
import { UsersQueryParams } from "../../interfaces/user.interface";
import { Usuario } from "../../entities/Usuario";
import { sinTokenMdw } from "../../middleware/sinTokenMdw";
import { HttpResponseHelper } from "../../helpers/utilHelpers";
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



export default routes;
