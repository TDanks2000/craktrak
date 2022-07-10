import React, { useEffect, useState } from "react";
import { top_rated } from "../../../utils/api";
import Post from "../../Post";
import { Spinner } from "../sections.styles";

function TopRated() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    return () => {
      top_rated().then(({ data }) => setInfo(data));
    };
  }, []);

  if (!info.length) return <Spinner />;

  return info.map((res) => <Post data={res} key={res.id} />);
}

export default TopRated;
