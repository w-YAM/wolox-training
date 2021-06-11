import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string;

    @Column()
    editorial: string;

    @Column()
    year: number

    @Column()
    price: number
}

interface iBookBase {
    title: string;
    editorial: string;
    year: number;
    price: number;
}

export interface iBook extends iBookBase {
    readonly id: number
}

export interface iCreateBook extends iBookBase { }

export interface iUpdateBook extends iBook { }