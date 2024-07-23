//useRef : useRef is a React Hook that lets you reference a value that’s not needed for rendering.

import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

function App(){

const [count, setCount]=useState(0);
const timeRef = useRef();

const onStartClick = () => {
  timeRef.current = setInterval (() => {
    setCount (count => count + 1 );
  }, 100); // 100 (time interval in milisecond)
}

const onStopClick = () => {
  clearInterval(timeRef.current);
}   
  return (
    <>
    <p>count - {count}</p>
    <button Class ="scale-90 hover:scale-100" onClick={onStartClick}>Start</button>
    <button Class ="scale-90 hover:scale-100" onClick={onStopClick}>Stop</button>
    </>
  );
}
export default App;