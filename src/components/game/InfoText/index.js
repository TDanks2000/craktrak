import React from "react";
import { Container, ExplainText, Text } from "./infoText.styles";

function InfoText({ explain, text }) {
  return (
    <Container>
      <ExplainText>{explain}</ExplainText>
      <Text>{text}</Text>
    </Container>
  );
}

export default InfoText;
