import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column } from 'typeorm';
import { Usuario } from './Usuario';
import { Rol } from './Rol';

@Entity({name: "usuario_rol"})
export class UsuarioRol {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Usuario, (usuario) => usuario.id)
    usuario: Usuario

    @ManyToOne(() => Rol, (roles) => roles.id)
    roles: Rol

    @Column({
        default: new Date()
    })
    fechaCreacion: Date

    @Column({
        nullable: true
    })
    fechaModificacion: Date
}