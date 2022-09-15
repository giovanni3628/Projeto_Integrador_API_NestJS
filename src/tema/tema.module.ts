import { Module } from '@nestjs/common';
import { TemaService } from './tema.service';
import { TemaController } from './tema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  exports: [TypeOrmModule],
  controllers: [TemaController],
  providers: [TemaService]
})
export class TemaModule {}
