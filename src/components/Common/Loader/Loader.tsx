import "./Loader.scss";

interface ILoader {
  size?: `${number}px`;
}

/**
 * Renders a loader.
 */
export const Loader = ({ size }: ILoader) => {
  return (
    <div
      className={`spinner`}
      style={{
        height: size,
        width: size,
      }}
    >
      <div className="double-bounce--1" />
      <div className="double-bounce--2" />
    </div>
  );
};
