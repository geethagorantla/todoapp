import { useState } from 'react';
import './App.css';

function App() {
  const [stopwatch, setStopwatch] = useState(0);
  const [fetchingId, setFetchingId] = useState(null);

  const handleIncrement = () => {
    if (fetchingId) clearInterval(fetchingId); // Clear any existing interval
    const id = setInterval(() => {
      setStopwatch((prevState) => prevState + 1);
    }, 1000);
    setFetchingId(id);
  };

  const handleDecrement = () => {
    if (fetchingId) clearInterval(fetchingId); // Clear any existing interval
    const id = setInterval(() => {
      setStopwatch((prevState) => prevState === 0 ? 0 : prevState - 1);
    }, 1000);
    setFetchingId(id);
  };

  const handleStop = () => {
    if (fetchingId) clearInterval(fetchingId); // Clear the interval
    setFetchingId(null); // Reset the interval ID
  };

  return (
    <div>
      <h1>{stopwatch}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
