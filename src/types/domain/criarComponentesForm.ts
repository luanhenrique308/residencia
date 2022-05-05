
export type Alternativa = {
    id?: number;
    alternativa: string;
    valorAlternativa: number;
}

export type Perguntas = {
    id?: number;
    pergunta: string
    alternativas?: Array<Alternativa>;
}

export type Atributos = {
    id?: number;
    nomeAtributo: string;
    perguntas?: Array<Perguntas>
}

export type Dimensao = {
    id?: number;
    nomeDimensao: string;
    atributos?: Array<Atributos>;
}