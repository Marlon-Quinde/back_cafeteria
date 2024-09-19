import { SelectQueryBuilder } from "typeorm";
import { db } from "../../connections/ormConfig";
import { Parametros } from "../../entities/Parametros";

export const ParametrosRepository = db.getRepository(Parametros).extend({

});
