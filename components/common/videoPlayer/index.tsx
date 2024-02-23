import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ url }: { url: string }) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    typeof window !== "undefined" && setHasWindow(true);
  }, []);

  return (
    <div>{hasWindow && <ReactPlayer width={401} height={351} url={url} />}</div>
  );
}
