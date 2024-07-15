import React from "react";
import "./custom-btn.scss";

interface ButtonProps
  extends React.PropsWithChildren<{
    onClick?: () => void;
  }> {}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="custom-btn">
      {children}
    </button>
  );
};

export default Button;
