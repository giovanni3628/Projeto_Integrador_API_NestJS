import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe, Put } from '@nestjs/common';
import { Tema } from './entities/tema.entity';
import { TemaService } from './tema.service';

@Controller('/tema')
export class TemaController {
  constructor(private readonly temaService: TemaService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() tema: Tema ): Promise<Tema> {
    return this.temaService.create(tema);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tema[]> {
    return this.temaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.CREATED)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
    return this.temaService.findById(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() tema: Tema): Promise<Tema> {
    return this.temaService.update(tema);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.temaService.delete(id);
  }
}
