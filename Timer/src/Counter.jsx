import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="fs-1 mb-4">Counter: {count}</h1>
        <div className="btn-group">
          <button className="btn btn-primary px-4" onClick={increment}>
            Increment
          </button>
          <button className="btn btn-danger px-4" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
