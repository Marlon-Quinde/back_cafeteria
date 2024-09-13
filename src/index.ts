import express, { NextFunction, Request, Response } from "express";
import apiRoutes from "./modules/auth/routes";
import apiCountries from "./modules/countries/routes";
import apiUsers from "./modules/users/routes";
import apiDollars from "./modules/dollar/routes";
import { application, PORT } from "./environments";
import "reflect-metadata";
import { AppDataSource } from "./connections/ormConfig";
import { ValidationError } from "express-validation";
import { responseHelper } from "./helpers/utilHelpers";
import { CodigosHttpEnum } from "./enums/codesHttpEnum";

AppDataSource.initialize()
  .then(async () => {
    try {
      const app = express();

      app.use(express.json())
      const prefix = "/api";

      app.use(`${prefix}/auth`, apiRoutes);
      app.use(`${prefix}/countries`, apiCountries);
      app.use(`${prefix}/users`, apiUsers);
      app.use(`${prefix}/dolares`, apiDollars);

      // ? Validation Error
      app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
        if (err instanceof ValidationError) {
          const message = Object.values(err.details)
          .reduce((a, v) => {
            a.push(...v.map((i: any) => i.message));
            return a;
          }, [])
          .join(" ");
          console.log(err)
          return responseHelper.errors(res, err.statusCode, err.message, message)
        }
        return responseHelper.errors(res, CodigosHttpEnum.internalServerError , err.message, err)
      })

      const port = PORT;
      app.listen(port, () => {
        console.log("El servidor esta funcionando en el puerto: ", port);
        console.log(
          `Modo: ${application.NODE_DEV ? "Desarrollo" : "Produccion"}`
        );
      });


      console.log("Conexion con la base existosa");
    } catch (error) {}
  })
  .catch((error) => console.log(error));
