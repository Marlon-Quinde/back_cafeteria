import { NextFunction, Request, Response, Router } from "express";
import { DollarsI } from "../../interfaces/dollar.interface";
import apiDollar from "../../apis/dollar";
const routes = Router();

routes.get("/getCurrency", async (req: Request, res: Response, next: NextFunction) => {
  const moneyAll = await apiDollar.get<DollarsI[]>('/dolares')

  const moneyInfo = moneyAll.data.map((dollar) => {
    return {
      name: dollar.nombre,
      currency: dollar.moneda,
    };
  });

  res.json(moneyInfo);
});


export default routes;
