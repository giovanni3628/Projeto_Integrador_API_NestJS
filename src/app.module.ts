import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemController } from './postagem/controllers/postagem.controller';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/modules/postagem.module';
import { PostagemService } from './postagem/services/postagem.service';

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
  controllers: [PostagemController],
  providers: [PostagemService],
})
export class AppModule {}
