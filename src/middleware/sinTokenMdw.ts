import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../connections/ormConfig";


export const sinTokenMdw = async (req: Request, res: Response, next: NextFunction) => {
    try {

        global.conn = AppDataSource.manager

        next();
    } catch (error) {
        
    }
}