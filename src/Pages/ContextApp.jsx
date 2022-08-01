import React, { useMemo } from 'react';
import { ColorProvider } from '../components/contexts/color';
import ColorBox from '../components/contexts/ColorBox';
import SelectColor from '../components/contexts/SelectColor';

function ContextApp() {
//   const colorValue = useMemo(() => ({ color: 'red' }), []);
  return (
    <ColorProvider>
      <SelectColor />
      <ColorBox />
    </ColorProvider>
  );
}

export default ContextApp;
