import { NextFunction, Request, Response, Router } from "express";
import { responseHelper } from "../../helpers/utilHelpers";
import { CodigosHttpEnum } from "../../enums/codesHttpEnum";
import { sinTokenMdw } from "../../middleware/sinTokenMdw";
import { validate } from "express-validation";
import { signInValidations } from "./validations";
import { SignInBodyI } from "../../interfaces/signIn.Interface";
import { signIn } from "./controller";

const routes = Router();

routes.post(
  "/sign-in",
  sinTokenMdw,
  validate(signInValidations),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: SignInBodyI = req.body;
      await signIn(body)
      res.json(body)
    } catch (error) {
      next(error);
    }
  }
);

routes.post(
  "/sign-up",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      responseHelper.errors(res, CodigosHttpEnum.internalServerError);
    }
  }
);

export default routes;
