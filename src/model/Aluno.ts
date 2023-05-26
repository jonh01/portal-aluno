import { Usuario } from "./Usuario";

export interface Aluno extends Usuario{
    id?:number,
    nome_curso: string,
}