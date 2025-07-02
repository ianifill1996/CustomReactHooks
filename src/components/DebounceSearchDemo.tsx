import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const DebounceSearchDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const debouncedValue = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedValue) {
      console.log('Searching for:', debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Debounce Search Demo</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '8px', width: '60%' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Current Input: {input}</p>
        <p>Debounced Value (after 500ms): {debouncedValue}</p>
      </div>
    </div>
  );
};

export default DebounceSearchDemo;
