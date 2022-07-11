import React, { useEffect, useState } from "react";
import { recentlyCracked } from "../../../utils/api";
import Post from "../../Post";
import { Spinner } from "../sections.styles";

function Recently() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    return () => {
      recentlyCracked().then(({ data }) => setInfo(data));
    };
  }, []);

  if (!info.items) return <Spinner />;

  return info.items.slice(0, 6).map((res) => {
    const { full_image, title, release_date, id } = res;

    const sendToPost = {
      name: title,
      cover: full_image,
      release_dates: release_date,
      id,
    };

    return (
      <Post
        data={sendToPost}
        key={sendToPost.id}
        convertImg={false}
        preCrackStatus={true}
        LinkTo={`/game/${encodeURIComponent(sendToPost.name)}/unkown`}
      />
    );
  });
}

export default Recently;
