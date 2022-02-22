import React from "react";

const Frase = ({ frase }) => {
  return (
    <p>
      {frase.text} <br />
      <span>- {frase.author} </span>
    </p>
  );
};

export default Frase;
