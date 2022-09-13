import React from "react";
import { v4 as uuid } from "uuid"; // Loader by Munrhalls (me)

export function Loader({ children, active }) {
  const decrement = [70, 60, 50, 40, 30, 20, 10];

  return (
    <>
      {active ? (
        <div className="Loader">
          {Array(7)
            .fill(null)
            .map((el, index) => {
              return (
                <div
                  key={uuid()}
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

          <h1 className="Loader__text">
            <span className="Loader__text__span">LOADING...</span>
          </h1>
        </div>
      ) : (
        children
      )}
    </>
  );
}
