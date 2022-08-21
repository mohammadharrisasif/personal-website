import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './routes/projects';
import Aboutme from './routes/aboutme';
import Notfound from './routes/notfound';
import Contact from './routes/contact';
import Home from './routes/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route 
            index
            element={<Home />}
          />
          <Route path={"projects"} element={<Projects />} />
          <Route path={"aboutme"} element={<Aboutme />} />
          <Route path={"contact"} element={<Contact />} />
          <Route 
            path={"*"}
            element={<Notfound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);