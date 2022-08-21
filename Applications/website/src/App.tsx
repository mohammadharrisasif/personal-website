import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Socialmediaicons from './components/socialmediaicons';

function App() {
  return (
    <body className="is-preload" id="root">
      <Navbar />
      <Outlet />
      <Socialmediaicons />
    </body>
  );
}

export default App;
