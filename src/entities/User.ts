import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: true,
    })
    identificacion: string

    @Column()
    nombres: string

    @Column()
    apellidos: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    fechaNacimiento: Date

    @Column({
        length: 1,
        nullable: true
    })
    estado: string
    
}
