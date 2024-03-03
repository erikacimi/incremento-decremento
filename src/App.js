import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const handleIncrement = () => {
    setTotalValue(totalValue + inputValue);
  };

  const handleDecrement = () => {
    if (totalValue > 0) {
      setTotalValue(totalValue - inputValue);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button onClick={handleIncrement}>Incrementa</button>
      <button onClick={handleDecrement} disabled={totalValue === 0}>
        Decrementa
      </button>
      <p>Valore totale: {totalValue}</p>
    </div>
  );
}

export default App;