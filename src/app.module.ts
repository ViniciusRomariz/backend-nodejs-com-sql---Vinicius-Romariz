import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './presentation/http/app/app.controller';
import { AppService } from './app.service';
import { Curso } from './infra/data/entities/curso.entity';
import { InfraModule } from './infra/infra.module';
import { PresentationModule } from './presentation/presentation.module';


@Module({
  imports: [
    PresentationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'teste_mysql',
      entities: [Curso],
      synchronize: true,
    }),
  ],
  providers: [],
})
export class AppModule {}

