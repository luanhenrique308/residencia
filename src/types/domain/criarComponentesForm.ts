
export type Alternativa = {
    id?: number;
    alternativa: string;
    valorAlternativa: number;
    id_Pergunta : number;
}

export type Perguntas = {
    id?: number;
    pergunta: string
    // alternativas?: Array<Alternativa>;
    id_Atributo: number
}

export type Atributos = {
    id?: number;
    nomeAtributo: string;
    // perguntas?: Array<Perguntas>
    id_Dimensao: number
}

export type Dimensao = {
    id?: number;
    nomeDimensao: string;
    // atributos?: Array<Atributos>;
}