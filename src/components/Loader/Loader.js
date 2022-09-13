import React from "react";

export function Loader({ children, active }) {
  return <> {active ? <div className="Loader">Loader</div> : children}</>;
}
