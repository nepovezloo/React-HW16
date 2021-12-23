import React, {useState, useEffect} from 'react';
import './App.css';
import Timer from './components/Timer'

function App() {
  return (
    <div className="App">
      <Timer time={60000} step={1000} onTick={(time) => console.log("Залишилось часу: " + time)}/>
      <Timer time={120000} step={2000} onTick={(time) => console.log("Залишилось часу: " + time)}/>
    </div>
  );
}

export default App;
