import React, { useContext } from 'react';
import { ColorContext } from './color';

function ColorBox() {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      >
        color
      </div>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.subColor,
        }}
      >
        subColor
      </div>
    </>
  );
}

export default ColorBox;
