import { Inject, Injectable } from "@nestjs/common";
import { CursoRepository } from "../../../infra/data/repositories/curso.repository";
import { IBaseUseCase } from "../base.usecase";
import { ListCourseUseCaseDto } from "./list-course.dto";


@Injectable()
export class ListCoursesUseCase implements IBaseUseCase<
ListCourseUseCaseDto.Input,
Promise<ListCourseUseCaseDto.Output>
> {

    constructor(
        private readonly _cursoRepository: CursoRepository
    ) {
        
    }    

    async execute(input: ListCourseUseCaseDto.Input): Promise<ListCourseUseCaseDto.Output> {

        const result = await this._cursoRepository.findAll();

        return {
            data: [ 
                ...result.map(item => {
                    return {
                        id: item.id,
                        description: item.descricao
                    }
                })
            ]
        }
    
    }

}
