import React, { useState } from "react";
import Child from "components/admin-state/child";
import Typography from "@mui/material/Typography";

export default function Parent() {
  const [inputText, setInputText] = useState("");

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
