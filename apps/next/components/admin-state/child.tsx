import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Child(props: Props) {
  return (
    <Paper component="form">
      <InputBase onChange={props.handleChange} />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
