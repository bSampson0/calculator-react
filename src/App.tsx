import React from 'react';
import './App.scss';
import Face from './components/Face';

function App() {
  return (
    <div className="App">
      <Face />
      <div className="github">
          <a href="https://github.com/bSampson0/calculator-react"><img src="../github-white.svg" alt="github icon" /></a>
      </div>
    </div>
  );
}

export default App;
