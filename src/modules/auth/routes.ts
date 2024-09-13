import { NextFunction, Request, Response, Router } from "express";
import { responseHelper } from "../../helpers/utilHelpers";
import { CodigosHttpEnum } from "../../enums/codesHttpEnum";

const routes = Router();

routes.post('/sign-in', async (req: Request, res: Response, next: NextFunction) => {
    res.send('Hola mundo')
})

routes.post('/sign-up', async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        responseHelper.errors(res, CodigosHttpEnum.internalServerError)
    }
})

export default routes;