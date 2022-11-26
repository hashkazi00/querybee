import { ReactNode } from "react";
import "./Button.scss";

interface IButton {
  action: () => void;
  render: string | ReactNode;
  className?: "neutral" | "giant" | "right-margin";
}

/**
 * Renders a button.
 */
export const Button = ({ action, render, className }: IButton) => {
  return (
    <button onClick={action} className={`button ${className}`}>
      {render}
    </button>
  );
};
