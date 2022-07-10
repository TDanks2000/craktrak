import React from "react";
import InfoText from "../InfoText";

function CrackedInfo({ data, cracked }) {
  if (!data?.Info)
    return (
      <>
        <InfoText
          explain={`crack status`}
          text={cracked === true ? "Cracked" : "Uncracked"}
        />
        {cracked === true && (
          <InfoText explain={`cracked by`} text={data?.result.group} />
        )}
      </>
    );

  return (
    <>
      <InfoText
        explain={`crack status`}
        text={cracked === true ? "Cracked" : "Uncracked"}
      />
      <InfoText explain={`cracked by`} text={data?.result.group} />
      <InfoText explain={`cracked In`} text={data?.Info.readable_status} />
    </>
  );
}

export default CrackedInfo;
