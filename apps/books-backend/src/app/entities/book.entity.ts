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

export interface iBook {
    title: string;
    editorial: string;
    year: number;
    price: number;
}

export interface iCreateBook {
    title: string;
    editorial: string;
    year: number;
    price: number;
}

export interface iUpdateBook {
    title: string;
    editorial: string;
    year: number;
    price: number;
}