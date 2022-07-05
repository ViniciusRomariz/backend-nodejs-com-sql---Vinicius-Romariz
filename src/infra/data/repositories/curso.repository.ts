import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from '../entities/curso.entity';

@Injectable()
export class CursoRepository {
  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ) {}

  findAll(): Promise<Curso[]> {

    return this.cursoRepository.find();

  }

  findOne(id: number): Promise<Curso> {
    return this.cursoRepository.findOne({
        where: {
            id: id
        }
    });
  }

  async remove(id: string): Promise<void> {
    await this.cursoRepository.delete(id);
  }
  
}
