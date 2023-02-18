import { useState } from "react";

/* A simple toggle hook
used to set the flip state of cards
*/

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipState = () => {
    setIsFacingUp((state) => !state);
  };
  return [isFacingUp, flipState];
};

export default useFlip;
