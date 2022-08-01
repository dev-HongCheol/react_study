import React from 'react';
import { ColorConsumer } from './color';

function ColorBox() {
  return (
    <ColorConsumer>
      {({ state }) => (
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
      )}
    </ColorConsumer>
  );
}

export default ColorBox;
