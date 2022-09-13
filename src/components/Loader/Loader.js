import React from "react";

export function Loader({ children, active }) {
  let decrement = [70, 60, 50, 40, 30, 20, 10];
  return (
    <>
      {active ? (
        <div className="Loader">
          {Array(7)
            .fill(null)
            .map((el, index) => {
              return (
                <div
                  style={{
                    height: `${decrement[index]}%`,
                    width: `${decrement[index]}%`,
                  }}
                  className={`Loader__symbol ${
                    index % 2 === 0 ? "--counterRotate" : "--rotate"
                  }`}
                ></div>
              );
            })}
        </div>
      ) : (
        children
      )}
    </>
  );
}
