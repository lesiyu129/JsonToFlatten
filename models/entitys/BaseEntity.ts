import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  is_parent: boolean;

  constructor(id: any, is_parent: boolean = false) {
    this.id = id;
    this.is_parent = is_parent;
  }
}
