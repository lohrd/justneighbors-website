import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
@Entity()
export default class Contact {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column()
    email: string;
}