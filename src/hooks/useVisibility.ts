import { useEffect, useRef } from "react";

interface IUseVisibility {
  action?: () => void;
  shouldActOnFocus: boolean;
}

export const useVisibility = ({ action, shouldActOnFocus }: IUseVisibility) => {
  const actionRef = useRef(action);
  useEffect(() => {
    if (!shouldActOnFocus) return;
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        actionRef.current && actionRef.current();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [shouldActOnFocus]);
};
