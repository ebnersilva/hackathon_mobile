import React from 'react';
import { useDispatch } from "react-redux";
import { Container, ContainerButtons, StyledButton, StyledText } from './styles';
import NavigationService from "~/services/navigation";

import * as SaveProfessorActions from "~/store/modules/saveProfessor/actions";

import Header from "~/components/Header";

export default function Initial() {
  const dispatch = useDispatch();

  function handleProfessor() {
    const professor = {
      name: "Diego Schell Fernandes"
    }

    dispatch(SaveProfessorActions.actionSaveProfessorRequest(professor));
  }

  function handleAluno() {
    NavigationService.navigate('QrCodeScan')
  }

  return (
    <>
      <Header
        buttonBackActive={false}
        buttonCloseActive={false}
        title="Início"
      />
      <Container>
        <ContainerButtons>
          <StyledButton color="#C50E29" onPress={() => handleProfessor()}>
            <StyledText color="#FFF">Professor</StyledText>
          </StyledButton>
          <StyledButton color="#FFF" onPress={() => handleAluno()}>
            <StyledText color="#000">Aluno</StyledText>
          </StyledButton>
        </ContainerButtons>
      </Container>
    </>
  );
}
