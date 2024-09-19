import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { db } from "../connections/ormConfig";
import seeders from ".";
import { exit } from "process";
import entities from "../entities";

const importarDatos = async () => {
  try {
    await db.initialize();
    await db.synchronize();

    await runSeeders(db, {
      seeds: [...seeders],
    });
    console.log('Datos importados correctamente')
    exit(0)
  } catch (error) {
    console.log(error)
    exit(1)
  }
};


const eliminarDatos = async () => {
  try {
    await db.initialize();
    
    const truncateTables = entities.map( entity => {
      const metaData = db.getMetadata(entity)
      return db.getRepository(entity).query(`TRUNCATE TABLE "${metaData.tableName}" CASCADE;`)
    })

    await Promise.all(truncateTables)

    console.log('Datos Eliminados correctamente')
    exit(0)
  } catch (error) {
    console.log(error)
    exit(1)
  }
}

if (process.argv[2] === '-i') {
  importarDatos()
}


if (process.argv[2] === '-e') {
  eliminarDatos()
}