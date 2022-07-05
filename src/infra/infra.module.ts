import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Curso } from "./data/entities/curso.entity";
import { CursoRepository } from "./data/repositories/curso.repository";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Curso
        ]),
    ],
    providers: [CursoRepository],
    exports: [CursoRepository],
})
export class InfraModule {}
