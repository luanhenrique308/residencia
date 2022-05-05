import React, { useCallback, useEffect, useState } from "react";
import ButtonOpenModal from "../../components/buttons/buttonOpenModal";
import DescricaoAlimentarBanco from "../../components/descricaoAlimentarBanco";
import ModalAlternativa from "../../components/modal/alternativa-modal";
import ModalAtributo from "../../components/modal/atributo-modal";
import ModalDimensao from "../../components/modal/dimensao-modal";
import ModalPerguntas from "../../components/modal/perguntas-modal";
// import { Atributos, Dimensao } from "../../types/domain/criarComponentesForm";
import { Container, ContainerDescricao, Content } from "./style";

const AlimentarBancoForm = () => {

  const [isOpenModalDimensao, setIsOpenModalDimensao] = useState<boolean>(false);
  const [isOpenModalAtributo, setIsOpenModalAtributo] = useState<boolean>(false);
  const [isOpenModalPergunta, setIsOpenModalPergunta] = useState<boolean>(false)
  const [isOpenModalAlternativa, setIsOpenModalAlternativa] = useState<boolean>(false)

  const handleStateModalDimensao = useCallback(()=>{
    setIsOpenModalDimensao(state=> !state);
  },[isOpenModalDimensao])

  const handleStateModalAtributo = useCallback(()=>{
    setIsOpenModalAtributo(state=> !state);
  },[isOpenModalAtributo])

  const handleStateModalPergunta = useCallback(()=>{
    setIsOpenModalPergunta(state=> !state);
  },[isOpenModalPergunta])

  const handleStateModalAlternativa = useCallback(()=>{
    setIsOpenModalAlternativa(state=> !state);
  },[isOpenModalAlternativa])

  return (
    <Container>
      <Content>
        <ModalDimensao stateModal={isOpenModalDimensao}  handle={handleStateModalDimensao}  />
        <ModalAtributo stateModal={isOpenModalAtributo} handle={handleStateModalAtributo} />
        <ModalPerguntas stateModal={isOpenModalPergunta} handle={handleStateModalPergunta} />
        <ModalAlternativa stateModal={isOpenModalAlternativa} handle={handleStateModalAlternativa} />
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Dimensão' />
          <ButtonOpenModal handleOpenModal={()=>handleStateModalDimensao()} />
        </ContainerDescricao>
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Atributo' />
          <ButtonOpenModal handleOpenModal={()=>handleStateModalAtributo()} />
        </ContainerDescricao>
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Pergunta' />
          <ButtonOpenModal handleOpenModal={handleStateModalPergunta}/>
        </ContainerDescricao>
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Alternativa' />
          <ButtonOpenModal handleOpenModal={handleStateModalAlternativa}/>
        </ContainerDescricao>

      </Content>
    </Container>

  );
}

export default AlimentarBancoForm;