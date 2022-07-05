import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "Cursos",
})
export class Curso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar'})
    descricao: string;

    @CreateDateColumn()
    dataInicio: Date;
}
