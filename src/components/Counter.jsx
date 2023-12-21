import React, { useState } from 'react';

const Counter = () => {
    const [score, setScore] = useState(0);

    function increment() {
        setScore(score + 1);
      }
    
      function decrement() {
        setScore(score - 1);
      }

    return (
        <div>
            <h1>{score}</h1>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
        </div>
    );
}

export default Counter;
