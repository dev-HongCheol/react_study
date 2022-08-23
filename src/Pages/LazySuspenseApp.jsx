import loadable from '@loadable/component';
import React, { Suspense, useState } from 'react';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

const SplitMe = React.lazy(() => import('../components/lazy/SplitMe'));
const SplitMeLoadable = loadable(() => import('../components/lazy/SplitMe'), {
  fallback: <div>!!loading..</div>,
});

function LazySuspenseApp() {
  const [visible, setVisible] = useState(false);
  const [visibleLoadable, setVisibleLoadable] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMeLoadable.preload();
  };
  return (
    <div>
      Lazy-suspense
      <button type="button" onClick={onClick}>suspense</button>
      <Suspense fallback={<div>Loading...</div>}>
        {visible && <SplitMe />}
      </Suspense>
      <hr onMouseOver={onMouseOver} />
      {visible && <SplitMeLoadable />}
    </div>
  );
}

export default LazySuspenseApp;
