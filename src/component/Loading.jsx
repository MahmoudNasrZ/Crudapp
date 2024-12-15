import { cloneElement } from "react";

const Loading = ({ loading, error, children }) => {
  const elementType = children?.type?.render?.displayName;

  const renderHandler = () => {
    if (elementType === "Button") {
      const clonedButton = cloneElement(
        children,
        { disabled: true },
        "Loading..."
      );
      return (
        <>
          {loading ? (
            clonedButton
          ) : error ? (
            <>
              {children}
              <b />
              <p>{error}</p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {loading ? (
          <p>
            Please Wait Posts Loading
            <span className="loader"></span>
          </p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          children
        )}
      </>
    );
  };
  return renderHandler();
};
export default Loading;
