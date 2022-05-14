import { useCallback, useState } from "react";

export default function useMouseAnimation(): [
  number,
  number,
  (x: number, y: number) => void,
  (id: number, isInside: boolean) => void,
  boolean
] {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [hoverState, setHoverState] = useState<Array<boolean>>([]);
  const [shouldShow, setShouldShow] = useState(false);

  const setXY = useCallback(
    (x: number, y: number) => {
      setMouseX(x);
      setMouseY(y);
    },
    [setMouseX, setMouseY]
  );

  const checkState = useCallback(() => {
    if (hoverState.some((s) => s)) {
      setShouldShow(true);
    }
    setShouldShow(() => {
      if (hoverState.some((s) => s)) {
        return true;
      }
      return false;
    });
  }, [hoverState, setShouldShow]);

  const signalFromBox = useCallback(
    (id: number, isInside: boolean) => {
      setHoverState((prev) => {
        prev[id] = isInside;
        return prev;
      });
      checkState();
    },
    [checkState, setHoverState]
  );

  return [mouseX, mouseY, setXY, signalFromBox, shouldShow];
}
