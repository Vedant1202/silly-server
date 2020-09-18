import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CanvasContainer from './containers/canvas/canvas.container';
import ControlsContainer from './containers/controls/controls.container';

function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <CanvasContainer />
        <ControlsContainer />
      </div>
    </div>
  );
}

export default App;
