import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, StyledTextInput, StyledInputText, StyledButton } from './styles';

import Header from "~/components/Header";

import * as SaveActivityActions from "~/store/modules/saveActivity/actions";

export default function Activity() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.data[1]);

  const [nameActivity, setNameActivity] = useState(null);

  function handleSaveActivity() {
    if (nameActivity) {
      dispatch(SaveActivityActions.actionSaveActivityRequest({ name: nameActivity, user_id: user.id }))
    } else {
      alert('Preencha os campos')
    }
  }

  return (
    <>
      <Header
        buttonBackActive={false}
        buttonCloseActive={false}
        title="Atividade"
      />
      <Container>
        <StyledTextInput>Nome da atividade</StyledTextInput>
        <StyledInputText value={nameActivity} onChangeText={(e) => setNameActivity(e)} />
        <StyledButton onPress={() => handleSaveActivity()} >
          <StyledTextInput>CRIAR</StyledTextInput>
        </StyledButton>

      </Container>
    </>
  );
}
