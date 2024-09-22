import { useState, useEffect } from "react";

export const useVisibilityAndScrollReset = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Mostra l'elemento dopo il montaggio
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Resetta lo scroll a Y0
  }, []);

  return isVisible;
};

export default useVisibilityAndScrollReset