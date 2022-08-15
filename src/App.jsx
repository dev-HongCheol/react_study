import React from 'react';
import {
  Route, Routes, BrowserRouter, Link,
} from 'react-router-dom';
import Info from './components/213_Info';
import ScssCompoent from './components/226_ScssCompoent';
import CssModule from './components/235_CssModule';
import NewsApp from './Pages/NewsApp';
import About from './router/About';
import Home from './router/Home';
import ContextApp from './Pages/ContextApp';
import ReduxApp from './Pages/ReduxApp';
import ReduxMiddleApp from './Pages/ReduxMiddleApp';

function App() {
  return (
    <>
      <div className="router">

        <BrowserRouter>
          <ul>
            <li>
              <Link to="/redux-middle">redux-middle</Link>
            </li>
            <li>
              <Link to="/redux">redux</Link>
            </li>
            <li>
              <Link to="/context">context</Link>
            </li>
            <li>
              <Link to="/news-api">new-api</Link>
            </li>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news-api/" element={<NewsApp />} />
            <Route path="/news-api/:category" element={<NewsApp />} />
            <Route path="/context" element={<ContextApp />} />
            <Route path="/redux" element={<ReduxApp />} />
            <Route path="/redux-middle" element={<ReduxMiddleApp />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* <hr />
      <CssModule />
      <hr />
      <ScssCompoent />
      <hr />
      <Info /> */}
    </>
  );
}

export default App;
