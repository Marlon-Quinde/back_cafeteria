import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombrePerfil: string

    @Column()
    estado: string

}