import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Rol } from "./Rol";
import { UsuarioRol } from "./UsuarioRol";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identificacion: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  email: string;

  @Column({
    nullable: true,
  })
  password: string;

  @Column()
  fechaNacimiento: Date;

  @Column({
    default: new Date()
  })
  fechaCreacion: Date

  @Column({
    nullable: true
  })
  fechaModificacion: Date

  @Column({
    length: 1,
  })
  estado: string;

  @OneToMany(() => UsuarioRol, (roles) => roles.id)
  roles: Rol[];
}
