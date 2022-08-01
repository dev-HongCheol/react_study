import React from 'react';
import { ColorConsumer } from './color';

const colors = [
  'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
];

function SelectColor() {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        { ({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '24px',
                  height: '24px',
                  cusor: 'pointer',
                }}
                onClick={() => actions.setColor(color)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    actions.setColor(color);
                  }
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}
                role="button"
                tabIndex={0}
                aria-label="setColor"
              />
            ))}
          </div>
        ) }
      </ColorConsumer>
    </div>
  );
}

export default SelectColor;
