import React from "react";
import {
  Cracked,
  CrackStatusContainer,
  NotCracked,
  Unreleased,
} from "./Content.styles";

function CrackStatus({ loading, cracked }) {
  if (loading) return null;

  if (cracked === null) {
    return (
      <CrackStatusContainer>
        <Unreleased>UNRELEASED</Unreleased>
      </CrackStatusContainer>
    );
  }

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
