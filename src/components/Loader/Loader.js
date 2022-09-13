import React from "react";

export function Loader({ children, active }) {
  return (
    <>
      {active ? (
        <div className="Loader">
          {Array(7)
            .fill(null)
            .map((el) => {
              return <div className="Loader__symbol"></div>;
            })}
        </div>
      ) : (
        children
      )}
    </>
  );
}
