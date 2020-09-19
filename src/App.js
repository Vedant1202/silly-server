import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CanvasContainer from './containers/canvas/canvas.container';
import ControlsContainer from './containers/controls/controls.container';
import { Sugar } from 'react-preloaders';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="flex-container">
          <CanvasContainer />
          <ControlsContainer />
        </div>
      </div>
      <Sugar color={'#fff'} background="#085269" />
    </React.Fragment>
  );
}

export default App;
