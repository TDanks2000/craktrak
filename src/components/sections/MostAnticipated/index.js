import React, { useEffect, useState } from "react";
import { most_anticipated } from "../../../utils/api";
import Post from "../../Post";
import { Spinner } from "../sections.styles";

function MostAnticipated() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    return () => {
      most_anticipated().then(({ data }) => setInfo(data));
    };
  }, []);

  if (!info.length) return <Spinner />;
  return info.map((res) => <Post data={res} key={res.id} />);
}

export default MostAnticipated;
