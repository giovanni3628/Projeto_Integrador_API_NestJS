import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from 'src/postagem/entities/postagem.entity';
import { DeleteResult, Repository } from 'typeorm';
import { Tema } from './entities/tema.entity';

@Injectable()
export class TemaService {

  constructor(

    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>

  ) {}

 async create(tema: Tema) {

    return this.temaRepository.save(tema)

  }

 async findAll(): Promise<Tema[]> {
    return this.temaRepository.find({
      relations: {
        postagem: true
      }
    })
  }

  async findById(id: number): Promise<Tema> {
    let tema = await this.temaRepository.findOne({
      where: {
        id
      },
      relations: {
        postagem: true
      }
    })
    if(!tema)
        throw new HttpException('Tema não foi encontrado!', HttpStatus.NOT_FOUND)

        return tema
  }

 async update(tema: Tema) {
    
    let temaUpdate = await this.findById(tema.id)

    if(!temaUpdate || !tema.id)
      throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND)

      return this.temaRepository.save(tema)
  }

  async delete(id: number): Promise<DeleteResult> {

    let temaDelete = await this.findById(id)

    if(!temaDelete)
      throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND)

      return this.temaRepository.delete(id)
  }
}
