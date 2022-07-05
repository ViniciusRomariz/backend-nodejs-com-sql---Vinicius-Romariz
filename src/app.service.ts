import { Injectable } from '@nestjs/common';
import { AppDto } from './app.dto';
import { CursoRepository } from './infra/data/repositories/curso.repository';

@Injectable()
export class AppService {

  constructor(
    private readonly _cursoRepository: CursoRepository
  ) {

  }

  async listarCursos(): Promise<AppDto.Response> {

    const cursosFromDb = await this._cursoRepository.findAll();

    return Promise.resolve({ 
      
      cursos: [
        ... cursosFromDb.map(item => {
          return {
            descricao: item.descricao,
            dataInicio: item.dataInicio
          }
        })
      ],

    });

  }


  getHello(): string {
    return 'Hello World!';
  }

}

