import { Conceito } from "./Conceito";

export interface ConceitoDTO extends Conceito {
    cpf: string;
    nome: string;
    email: string;
}