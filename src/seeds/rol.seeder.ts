import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Rol } from '../entities/Rol';
import { rolSeeder } from '../database/rol.seed';

export default class RolSeeder implements Seeder {
    /**
     * Track seeder execution.
     *
     * Default: false
     */
    track = false;

    public async run(
        dataSource: DataSource,
    ): Promise<any> {
        const repository =  dataSource.getRepository(Rol);
        await repository.insert(rolSeeder);

    }
}