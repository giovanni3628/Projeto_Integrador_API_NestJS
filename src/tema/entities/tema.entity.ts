import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_tema')
export class Tema {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    tema: string

    @IsNotEmpty()
    @MaxLength(250)
    @Column({nullable: false, length: 250})
    descricao: string  

    @OneToMany(() => Postagem, (postagem) => postagem.tema, {
        onDelete: "CASCADE"
    })
    postagem: Postagem[]
}
