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

function App() {
  return (
    <>
      <div className="router">

        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/new-api">new-api</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-api/:category?" element={<NewsApp />} />
          </Routes>
        </BrowserRouter>
      </div>

      <hr />
      <CssModule />
      <hr />
      <ScssCompoent />
      <hr />
      <Info />
    </>
  );
}

export default App;
