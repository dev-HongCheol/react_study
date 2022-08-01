import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

function ColorProvider({ children }) {
  console.log(children);
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = useMemo(() => ({
    state: { color, subColor },
    actions: { setColor, setSubColor },
  }), [color, subColor]);

  return (
    <ColorContext.Provider
      value={value}
    >
      {children}
    </ColorContext.Provider>
  );
}

ColorProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.objectOf),
    PropTypes.element,
  ]).isRequired,
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer, ColorContext };
