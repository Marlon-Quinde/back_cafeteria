import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";
import { UsuarioRol } from "./UsuarioRol";

@Entity()
export class Rol {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column({
        default: new Date()
    })
    fechaCreacion: Date

    @Column({
        nullable: true
    })
    fechaModificacion: Date
    
    @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.roles)
    usuarioRol: UsuarioRol[]

    @Column({
        length: 1
    })
    estado: string


}