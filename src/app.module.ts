import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/modules/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@Logitech1',
      database: 'db_projeto',
      entities: [Postagem],
      synchronize: true
    }),
    PostagemModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
