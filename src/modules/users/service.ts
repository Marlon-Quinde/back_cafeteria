import { Response } from "express";
import { PersonaI } from "../../interfaces/persona.interface";
import apiJsonPlaceHolder from "../../apis/jsonPlaceHolder";
import UserRepository from "./repository";
import { UsersQueryParams } from "../../interfaces/user.interface";
import { AppDataSource } from "../../connections/ormConfig";
import { EntityManager } from "typeorm";
import { User } from "../../entities/User";

export class UserService {

    userRepository = new UserRepository()

    async getAllUsers(filtro?: string, estado?: string) {
        const res = await this.userRepository.findUsers( AppDataSource.manager ,filtro, estado)
        return res
    }
    async createUser(cnx: EntityManager, data: User) {
        const res = await this.userRepository.createUser(cnx, data)
        return res
    }

    async findUser(cnx: EntityManager, data: User) {
        const res = await this.userRepository.createUser(cnx, data)
        return res
    }

    async getUserApiJsonPlaceHolder() {
        try {
            const users = await apiJsonPlaceHolder<PersonaI[] >('/users').then( r => r.data)
            const newUsers = users.map((persona) => {
                return {
                    name: persona.name,
                    username: persona.username,
                    email: persona.email

                }
            })

            return newUsers
        } catch (error) {
            throw error
        }
    }
}