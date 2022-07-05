import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const  config = new DocumentBuilder()
    .setTitle('Documentação Poc Aluno Nest')
    .setDescription('Descrição dos endpoints da API utilizando swagger!!')
    .setVersion('0.1.0')
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic',
    })
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    })
    .addTag('auth')
    .addTag('courses')
    .build();

  
  const document = SwaggerModule.createDocument(app, config);

  console.log(document);
  
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

}

bootstrap();

