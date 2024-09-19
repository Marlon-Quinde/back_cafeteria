import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dominio {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    dominio: string

    @Column({
        default: new Date()
    })
    fechaCreacion: Date

    @Column({
        nullable: true
    })
    fechaModificacion: Date

    @Column({
        nullable: true
    })
    estado: string

}