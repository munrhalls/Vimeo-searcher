import React, { useState, useEffect } from "react";

export default function useWindowHeight() {
  const [vh, setVh] = useState(0);

  const updateVh = () => {
    const vh =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    setVh(vh);
  };

  useEffect(() => {
    updateVh();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
    };
  });
  return vh;
}
