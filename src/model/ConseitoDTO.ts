import { Conceito } from "./conceito";

export interface ConceitoDTO extends Conceito {
    cpf: string;
    nome: string;
    email: string;
}