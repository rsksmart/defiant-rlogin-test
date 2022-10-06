import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [windowObject, setWindowObject] = useState<string[]>([])
  useEffect(() => {
    // get the window:
    // setWindowObject(JSON.stringify(window))
    console.log(Object.getOwnPropertyNames(window))
    const windowProps = Object.getOwnPropertyNames(window).sort()
    setWindowObject(windowProps)
  },[])

  return (
    <div className="App">
      <h1>Hello Defiant Wallet ;-)</h1>

      <h2>Window props:</h2>
      <ul>
        {windowObject.map((name: string) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
