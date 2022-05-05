import React, { useCallback, useEffect, useState } from "react";
import ButtonOpenModal from "../../components/buttons/buttonOpenModal";
import DescricaoAlimentarBanco from "../../components/descricaoAlimentarBanco";
import ModalAtributo from "../../components/modal/atributo-modal";
import ModalDimensao from "../../components/modal/dimensao-modal";
// import { Atributos, Dimensao } from "../../types/domain/criarComponentesForm";
import { Container, ContainerDescricao, Content } from "./style";

const AlimentarBancoForm = () => {

  const [isOpenModalDimensao, setIsOpenModalDimensao] = useState<boolean>(false);
  const [isOpenModalAtributo, setIsOpenModalAtributo] = useState<boolean>(false);

  const handleStateModalDimensao = useCallback(()=>{
    setIsOpenModalDimensao(state=> !state);
  },[isOpenModalDimensao])

  const handleStateModalAtributo = useCallback(()=>{
    setIsOpenModalAtributo(state=> !state);
  },[isOpenModalAtributo])

  return (
    <Container>
      <Content>
        <ModalDimensao stateModal={isOpenModalDimensao}  handle={handleStateModalDimensao}  />
        <ModalAtributo stateModal={isOpenModalAtributo} handle={handleStateModalAtributo} />
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
          {/* <ButtonOpenModal /> */}
        </ContainerDescricao>

      </Content>
    </Container>

  );
}

export default AlimentarBancoForm;