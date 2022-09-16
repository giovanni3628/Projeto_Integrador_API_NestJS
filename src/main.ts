import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('API Projeto Integrador Grupo 03 - TM04')
  .setDescription('Api criada em grupo utilizando NestJS para conclusão do projeto final - Generation Brasil')
  .setContact('Grupo 03',
   'https://github.com/giovanni3628/Projeto_Integrador_API_NestJS',
    '')
  .setVersion('1.0')
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)


  process.env.TZ = '-03:00'

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()

  await app.listen(process.env.PORT  || 3000);
}
bootstrap();
