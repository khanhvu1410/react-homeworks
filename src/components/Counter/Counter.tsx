import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handleAdd = () => {
    setCount((pre) => pre + 1);
  };

  return (
    <div className="counter-box">
      <button className="counter-button" onClick={handleMinus}>
        -
      </button>
      <span className="count-number">{count}</span>
      <button className="counter-button" onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default Counter;
