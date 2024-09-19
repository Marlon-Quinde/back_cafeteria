import { Dominio } from "../entities/Dominio";
import { HOST } from "../environments";

export const dominioSeeder: Partial<Dominio>[] = [
    {
        dominio: HOST,
        estado: 'A'
    }
]