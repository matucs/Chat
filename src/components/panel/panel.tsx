import React, { useRef } from "react";

type props = {
  handleIsActive: () => void;
  text: string;
  active: string;
};
const Panel: React.FC<props> = ({ text, active, handleIsActive }) => {
  const refActivation = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={refActivation}
      onClick={handleIsActive}
      className={`list-group-item ${active}`}
    >
      {text}
    </li>
  );
};
export default Panel;
