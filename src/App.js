import React from 'react';
import CambioDatos from './Components/CambioDatos';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="color-overlay">
        <div className="form-container">
          <CambioDatos />
        </div>
      </div>
    </div>
  );
}

export default App;
