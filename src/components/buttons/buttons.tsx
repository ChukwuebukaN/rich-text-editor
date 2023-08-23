import React from "react";

type ButtonProps = {
  title?: string;
  styling?: string;
  text?: string;
  textStyling?: string;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
};

const Buttons: React.FC<ButtonProps> = (props): JSX.Element => {
  const { title, styling, text, textStyling, onClick, children } = props;

  return (
    <button type="button" title={title} onClick={onClick} className={styling}>
      <p className={textStyling}>{text}</p>
      {children}
    </button>
  );
};

export default Buttons;
