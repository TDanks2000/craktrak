import React, { useEffect, useState } from "react";
import { popular } from "../../../utils/api";
import Post from "../../Post";
import { Spinner } from "../sections.styles";

function PopularComp() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    return () => {
      popular().then(({ data }) => setInfo(data));
    };
  }, []);

  if (!info.length) return <Spinner />;
  return info.map((res) => <Post data={res} key={res.id} />);
}

export default PopularComp;
