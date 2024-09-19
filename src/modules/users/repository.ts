import { SelectQueryBuilder } from "typeorm";
import { Usuario } from "../../entities/Usuario";
import { db } from "../../connections/ormConfig";

export const UserRepository = db.getRepository(Usuario).extend({
  findByName(firstName: string, lastName: string) {
    const query: SelectQueryBuilder<Usuario> = this.createQueryBuilder("user");
    return query
      .where("user.firstName = :firstName", { firstName })
      .andWhere("user.lastName = :lastName", { lastName })
      .getMany();
  },
  findUsers(filtro: string, estado: string) {
    const query: SelectQueryBuilder<Usuario> = this.createQueryBuilder("user");
    query.select([
      'user.identificacion as "identificacion"',
      'user.nombres as "nombres"',
      'user.apellidos as "apellidos"',
      'user.email as "email"',
      'user.fechaNacimiento as "fechaNacimiento"',
    ]);

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

    return query.getRawMany<Usuario>();
  },
});
