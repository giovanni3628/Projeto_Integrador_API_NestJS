import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_tema')
export class Tema {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    tema: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(250)
    @Column({nullable: false, length: 250})
    descricao: string  

    @OneToMany(() => Postagem, (postagem) => postagem.tema, {
        onDelete: "CASCADE"
    })
    @ApiProperty({type: () => Postagem})
    postagem: Postagem[]
}
