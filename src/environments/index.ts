import { config } from "dotenv";
config();



export const PORT = process.env.PORT ?? 3000 // ? Operador Nulish Coalesing
export const API_RESTCOUNTRY = process.env.API_RESTCOUNTRY!
export const HOST = process.env.HOST
export const TOKEN_TMDB = process.env.TOKEN_TMDB
export const API_TMDB = process.env.API_TMDB
export const API_DOLLAR = process.env.API_DOLLAR
export const DB_PORT = process.env.DB_PORT
export const DB_HOST = process.env.DB_HOST
export const DB_USER = process.env.DB_USER
export const DB_PASS = process.env.DB_PASS
export const DB_NAME = process.env.DB_NAME
export const API_JSONPLACEHOLDER = process.env.API_JSONPLACEHOLDER

export const application = {
    // * Explicar if tradicional
    // * Explicar co
    get NODE_DEV() {
        return process.env.NODE_DEV === 'true' // ! true : false
    },
    get DB_SYNCHRONIZE(){
        return process.env.DB_SYNCHRONIZE === 'true'
    },
    get EDAD_LIMITE(){
        return process.env.EDAD_LIMITE
    }
}