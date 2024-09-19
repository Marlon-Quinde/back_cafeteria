import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Parametros {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    codigo: string

    @Column()
    valor: string

    @Column({
        nullable: true
    })
    descripcion: string

    @Column({
        default: false
    })
    modificable: boolean

    @Column({
        default: new Date()
    })
    fechaCreacion: Date

    @Column({
        nullable: true
    })
    fechaModificacion: Date
}