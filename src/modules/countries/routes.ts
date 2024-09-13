import { NextFunction, Request, Response, Router } from "express";
import { ContriesI } from "../../interfaces/countries.interface";
import apiRestCountry from "../../apis/restCountry";
const routes = Router();

routes.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const code = req.params.id;
  console.log(code);
  // const country: ContriesI = await fetch(
  //   `https://restcountries.com/v3.1/alpha/${code}`
  // ).then((r) => r.json());  

  // res.json(country);
});

routes.get("/all", async (req: Request, res: Response, next: NextFunction) => {
  const response = await apiRestCountry.get<ContriesI[]>("/all");
  const newPaises = response.data.map((pais) => {
    return {
      name: pais.name.common,
      common: pais.region,
    };
  });

  res.json(newPaises);
});

export default routes;
