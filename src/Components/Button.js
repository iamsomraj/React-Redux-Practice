import React from 'react';

const Button = (props) => {
  return (
    <button
      style={{
        margin: '1rem',
        padding: '0.5rem',
        fontStyle: 'italic',
        fontWeight: '400',
      }}
      onClick={props.clicked}
    >
      {props.label}
    </button>
  );
};

export default Button;
