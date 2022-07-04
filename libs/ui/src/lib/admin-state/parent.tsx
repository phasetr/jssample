import React, { useState } from 'react';
import Child from './child';
import Typography from '@mui/material/Typography';

export function Parent() {
  const [inputText, setInputText] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <h2>Input here!</h2>
      <div className="Searcher">
        <Child handleChange={handleChange} />
      </div>
      <Typography>{inputText}</Typography>
    </div>
  );
}

export default Parent;
