import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_postagem')
export class Postagem {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    imagem: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    descricao: string

    @IsNotEmpty()
    @MaxLength(150)
    @Column({nullable: false, length: 150})
    titulo: string
}