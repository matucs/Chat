import React from "react";

const Header: React.FC<{ title: string }> = ({title}) => {
  return (
      <h5 className="text-center font-weight-bold bg-light mt-2">{title}</h5>
  );
};
export default Header;
