import React, { useState } from "react";
import ButtonOpenModal from "../../components/buttons/buttonOpenModal";
import DescricaoAlimentarBanco from "../../components/descricaoAlimentarBanco";
import ModalDimensao from "../../components/modal/modal-dimensao";
import { Atributos, Dimensao } from "../../types/domain/criarComponentesForm";
import { Container, ContainerDescricao, Content } from "./style";

const AlimentarBancoForm = () => {
  const [nomeDimensao, setNomeDimensao] = useState<string>('');
  const [dimensao, setDimensao] = useState<Array<Dimensao>>([]);
  const [nomeAtributo, setNomeAtributo] = useState<string>('');
  const [atributo, setAtributo] = useState<Array<Atributos>>([]);

  const [openSectionAddAtributo, setOpenSectionAddAtributo] = useState<boolean>(false);

  const criarDimensao = () => {
    setDimensao([...dimensao, { id: dimensao.length, nomeDimensao: nomeDimensao, atributos: [] }])
  }

  const handleSectionAddAtributo = () => {
    setOpenSectionAddAtributo(state => !state);
  }

  const criarAtributo = (id?: number) => {
    setAtributo([...atributo, { nomeAtributo: nomeAtributo, }])
    const dimensaoCorrespondente = dimensao.filter(item => item.id === id);
    dimensaoCorrespondente.map(item => {
      item.atributos?.push({ nomeAtributo: nomeAtributo });
    })
  }

  // const OpenModalDimensao = ()=>{

  // }

  return (
    <Container>
      
      <Content>
        <ModalDimensao />
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Dimensão' />
          <ButtonOpenModal />
        </ContainerDescricao>
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Atributo' />
          <ButtonOpenModal />
        </ContainerDescricao>
        <ContainerDescricao>
          <DescricaoAlimentarBanco tipoDescricao='Pergunta' />
          <ButtonOpenModal />
        </ContainerDescricao>

      </Content>
    </Container>

  );
}

export default AlimentarBancoForm;