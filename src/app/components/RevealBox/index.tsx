import { useCallback, useReducer } from "react";

import React, { useRef, useEffect } from "react";

export default function RevealBox({
  url,
  setXY,
  signalFromBox,
}: {
  url: string;
  setXY: (x: number, y: number) => void;
  signalFromBox: (isInside: boolean) => void;
}) {
  const imageRef =
    useRef<HTMLDivElement | null>() as React.MutableRefObject<HTMLDivElement>;
  const [isRevealed, reveal] = useReducer(() => true, false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (imageRef.current.contains(e.target as Node)) {
        signalFromBox(true);
        return setXY(e.pageX, e.pageY);
      }
      signalFromBox(false);
    },
    [imageRef, setXY, signalFromBox]
  );

  useEffect(() => {
    if (isRevealed) {
      signalFromBox(false);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isRevealed, handleMouseMove, signalFromBox]);

  return (
    <div className="w-48 h-48 md:w-60 md:h-40 mx-8 my-2 md:my-8 md:mx-2 overflow-hidden">
      <div
        onClick={reveal}
        ref={imageRef}
        style={{
          backgroundImage: `url(${url})`,
        }}
        className={
          "w-full h-full bg-no-repeat bg-cover bg-center cursor-pointer ease-linear duration-1000 " +
          (!isRevealed && `blur-xl`)
        }
      ></div>
    </div>
  );
}
