import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemController } from './postagem/controllers/postagem.controller';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/modules/postagem.module';
import { PostagemService } from './postagem/services/postagem.service';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@Logitech1',
      database: 'db_projeto',
      entities: [Postagem, Tema],
      synchronize: true
    }),
    PostagemModule,
    TemaModule
    
  ],
  controllers: [PostagemController],
  providers: [PostagemService],
})
export class AppModule {}
