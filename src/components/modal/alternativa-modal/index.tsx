import React, { useState } from "react";
import { Alternativa } from "../../../types/domain/criarComponentesForm";
import { mockListAlternativas } from "../../../utils/mockListAlternativas";
import { mockListPergunta } from "../../../utils/mockListPerguntas";
import ContainerModal from "../container-modal";


type ModalAlternativaProps = {
    handle: () => void;
    stateModal: boolean;
}
const ModalAlternativa = ({ handle, stateModal }: ModalAlternativaProps) => {
    const [alternativa, setAlternativa] = useState<string>("");
    const [valorAlternativa, setValorAlternativa] = useState<number>(0);
    const [listaAlternativas, setListaAlternativas] = useState<Array<Alternativa>>([])
    const [idPerguntaSelecionada, setIdPerguntaSelecionada]= useState<number>(0);

    const adicionarAlternativasLista = () => {
        mockListAlternativas.push({ alternativa: alternativa, valorAlternativa: valorAlternativa, id:mockListAlternativas.length+1, id_Pergunta:idPerguntaSelecionada })
        setListaAlternativas([...listaAlternativas, { alternativa: alternativa, valorAlternativa: valorAlternativa, id:mockListAlternativas.length+1, id_Pergunta:idPerguntaSelecionada }])
        // filtraListaPergunta(idPerguntaSelecionada);
    }

    // const filtraListaPergunta = (idDimensao: number) => {
    //     mockListPergunta.filter(pergunta=> pergunta.id === idDimensao && pergunta.alternativas?.push({valorAlternativa:valorAlternativa, alternativa:alternativa}))
    // }

    return (
        <ContainerModal
            stateModal={stateModal}
            handle={handle}
        >
            <div>
                <select value={idPerguntaSelecionada} onChange={(e)=>{setIdPerguntaSelecionada(parseInt(e.target.value))}}>
                    {mockListPergunta.map((pergunta) => {
                        return (
                            <option value={pergunta.id}>{pergunta.pergunta}</option>
                        )
                    })
                    }
                </select>
                <div>
                    <input type="text" value={alternativa} onChange={(e) => { setAlternativa(e.target.value) }} />
                    <input type="number" value={valorAlternativa} onChange={(e) => { setValorAlternativa(parseInt(e.target.value)) }} />
                </div>
                <button onClick={adicionarAlternativasLista}>adicionar Alternativa</button>
            </div>
        </ContainerModal>
    )
}

export default ModalAlternativa;