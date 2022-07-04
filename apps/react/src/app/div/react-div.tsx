import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { WithLeftMenu } from '@jssamples/ui';
import { Link } from 'react-router-dom';

export default function ReactDiv() {
  return (
    <WithLeftMenu>
      <Box component="h1">divタグサンプル集</Box>
      <Box component="h2">
        <Link to="https://web-camp.io/magazine/archives/97816">元サイト</Link>
      </Box>
      <DivWrapper1>div-sample1</DivWrapper1>
      <DivWrapper2>div-sample2</DivWrapper2>
      <DivWrapper3>div-sample3</DivWrapper3>
    </WithLeftMenu>
  );
}

const DivWrapper1 = styled("div")({
  border: "2px solid #aaa",
  borderRadius: "10px",
  backgroundColor: "#eee",
  padding: "2em",
  margin: "10px",
});
const DivWrapper2 = styled("div")({
  borderTop: "8px solid #aaa",
  borderRadius: "10px",
  backgroundColor: "#eee",
  boxShadow: "0 3px 4px rgba(0, 0, 0, 0.32)",
  padding: "2em",
  margin: "10px",
});
const DivWrapper3 = styled("div")({
  borderLeft: "5px double skyblue",
  borderRight: "5px double skyblue",
  borderRadius: "10px",
  backgroundColor: "#eee",
  padding: "2em",
  margin: "10px",
});
