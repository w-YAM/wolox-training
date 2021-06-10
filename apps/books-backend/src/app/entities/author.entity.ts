import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    age: number
}