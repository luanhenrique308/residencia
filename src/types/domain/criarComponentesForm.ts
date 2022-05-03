
export type OpcaoResposta = {
    id: number;
    opcao: string;
    valorAtribuido: number;
}

export type Perguntas = {
    id: number;
    pergunta: string
    alternativas: Array<OpcaoResposta>;
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