import React from 'react';
import './App.css';
import api from './services/api';

import Routes from './routes';

function App() {
  

  return (
    <div className="container">
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
