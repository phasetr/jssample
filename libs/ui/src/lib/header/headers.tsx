import H2Sample01 from './h2-sample01';
import H2Sample02 from './h2-sample02';
import H2Sample03 from './h2-sample03';
import H2Sample04 from './h2-sample04';
import {Link as MuiLink} from "@mui/material";
import Box from "@mui/material/Box";

export function Headers() {
  return (
    <>
      <Box component="h1">hタグサンプル集</Box>
      <MuiLink href="https://web-camp.io/magazine/archives/97816" target="_blank" rel="noreferrer noopener">元サイト</MuiLink>
      <H2Sample01>h2-sample1</H2Sample01>
      <H2Sample02>h2-sample2</H2Sample02>
      <H2Sample03>h2-sample3</H2Sample03>
      <H2Sample04>h2-sample4</H2Sample04>
    </>
  );
}

export default Headers;
