import { PersonaI } from "../../interfaces/persona.interface";
import apiJsonPlaceHolder from "../../apis/jsonPlaceHolder";
import { UserRepository } from "./repository";
import { EntityManager } from "typeorm";
import { Usuario } from "../../entities/Usuario";

export class UserService {
  async getAllUsers(filtro?: string, estado?: string) {
    try {
        const res = await UserRepository.findUsers(filtro, estado);
        return res;
    } catch (error) {
        throw error
    }

  }
  async createUser(data: Usuario) {
    const res = await UserRepository.save(data);
    return res;
  }

  async findUser(id: number) {
    const res = await UserRepository.findOne({where: {id}});
    return res;
  }

  async getUserApiJsonPlaceHolder() {
    try {
      const users = await apiJsonPlaceHolder<PersonaI[]>("/users").then(
        (r) => r.data
      );
      const newUsers = users.map((persona) => {
        return {
          name: persona.name,
          username: persona.username,
          email: persona.email,
        };
      });

      return newUsers;
    } catch (error) {
      throw error;
    }
  }
}
