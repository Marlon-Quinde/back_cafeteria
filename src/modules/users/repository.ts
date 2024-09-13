import { EntityManager} from "typeorm";
import { User } from "../../entities/User";

export default class UserRespository {
  async findAllUsers(cnx: EntityManager) {
    return await cnx
      .createQueryBuilder()
      .select(["user.nombres", "user.apellidos"])
      .from(User, "user")
      .getMany();
  }
  async findUsersByState(cnx: EntityManager, estado: string) {
    return await cnx
      .createQueryBuilder()
      .select(["user.nombres", "user.apellidos"])
      .from(User, "user")
      .where("user.estado = :estado", { estado })
      .getMany();
  }
  async findUsers(cnx: EntityManager, filtro?: string, estado?: string) {
    const query = cnx.createQueryBuilder().select(["user"]).from(User, "user");

    if (filtro) {
      query.andWhere(
        "concat(upper(user.nombres), ' ', upper(user.apellidos)) like :filtro",
        { filtro: `%${filtro.trim().toUpperCase()}%` }
      );
    }

    if (estado) {
      query.andWhere("user.estado = :estado", {
        estado: estado.trim().toUpperCase(),
      });
    }

    return await query.getRawMany();
  }

  async createUser(cnx: EntityManager, data: User) {
    return await cnx.getRepository(User).save(data)
  }
}

