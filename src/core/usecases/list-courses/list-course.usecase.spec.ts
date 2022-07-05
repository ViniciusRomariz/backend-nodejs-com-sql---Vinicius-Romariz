import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Curso } from "../../../infra/data/entities/curso.entity";
import { CursoRepository } from "../../../infra/data/repositories/curso.repository";
import { ListCoursesUseCase } from "./list-course.usecase";


const mockRepository = {
    findAll: jest.fn(),
}

describe('ListCourseUserCase',  () => {

    let usecase: ListCoursesUseCase;

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            
            providers: [
                ListCoursesUseCase,
                {
                    provide: CursoRepository,
                    useValue: mockRepository
                }
                
            ],  
        
        }).compile();


        usecase = module.get<ListCoursesUseCase>(ListCoursesUseCase)

    })

    it('should be defined', async() => {
        
        expect(usecase).toBeDefined()

    });

    it('should return an empty array when no data in db', async() => {
        
        const testResult = [];
        mockRepository.findAll.mockReturnValue(testResult);

        const result = await usecase.execute({filter: {}});
        
        expect(result.data).toStrictEqual(testResult); 


    })

    it('should return an array with one item', async() => {
        
        const expectedResult = [{id: 1, descricao: 'teste'}];
        mockRepository.findAll.mockReturnValue(expectedResult);

        const result = await usecase.execute({filter: {}});
        
        expect(result.data.length).toBe(1); 

    })

  
  });
