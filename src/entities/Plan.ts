import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  periodo: number;

  @Column({
    type: "json",
  })
  descripcion: object;

  @Column({
    type: 'float',
    scale: 2,
    default: 0
  })
  precio: number;

  @Column({
    default: new Date(),
  })
  fechaCreacion: Date;

  @Column({
    nullable: true,
  })
  fechaModificacion: Date;

  @Column({
    length: 1,
  })
  estado: string;
}
