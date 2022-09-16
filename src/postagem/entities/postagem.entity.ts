import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { type } from "os";
import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_postagem')
export class Postagem {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column()
    imagem: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    descricao: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(150)
    @Column({nullable: false, length: 150})
    titulo: string

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    @ApiProperty({type: () => Tema})
    tema: Tema
}