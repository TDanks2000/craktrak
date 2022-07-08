import React from "react";
import { Cracked, CrackStatusContainer, NotCracked } from "./Content.styles";

function CrackStatus({ loading, cracked }) {
  if (loading) return null;
  return (
    <CrackStatusContainer>
      {cracked ? (
        <Cracked>Cracked</Cracked>
      ) : (
        <NotCracked>Uncracked</NotCracked>
      )}
    </CrackStatusContainer>
  );
}

export default CrackStatus;
