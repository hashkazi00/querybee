import { useEffect, useRef } from "react";

interface IUseClickOutsideParams {
  callback: () => void;
}

export const useClickOutside = ({ callback }: IUseClickOutsideParams) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const callbackRef = useRef<() => void>(callback);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!elementRef?.current?.contains(e.target as Node) && callbackRef) {
        callbackRef.current();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [elementRef, callbackRef]);

  return elementRef;
};
