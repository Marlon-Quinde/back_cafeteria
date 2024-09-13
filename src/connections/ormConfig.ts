import "reflect-metadata"
import { DataSource } from "typeorm"
import { application, DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "../environments"
import entities from "../entities"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: application.DB_SYNCHRONIZE,
    logging: false,
    entities: [...entities],
    migrations: [],
    subscribers: [],
})
