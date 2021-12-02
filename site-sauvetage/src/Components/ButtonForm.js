import React from "react";

const ButtonForm = ({ text, clicked, buttonType }) => {
  return (
    <div>
        <button onClick={clicked} className="button-form">{text}</button>
    </div>
  );
};

export default ButtonForm;