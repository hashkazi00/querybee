import { fireEvent, render, screen } from "@testing-library/react";
import { useClickOutside } from "../useClickOutside";

describe("Testing useClickOutside Hook", () => {
  const onClick = jest.fn();

  const TestArea = () => {
    const elemRef1 = useClickOutside({
      callback: onClick,
    });
    return (
      <>
        <div ref={elemRef1} role="button">
          No-Trigger Area
        </div>
        <div role="button">Trigger Area</div>
      </>
    );
  };

  test("Clicking outside calls the callback", () => {
    render(<TestArea />);
    fireEvent(
      screen.getByText("Trigger Area"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("Clicking inside doesn't call the callback", () => {
    render(<TestArea />);
    fireEvent(
      screen.getByText("No-Trigger Area"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
