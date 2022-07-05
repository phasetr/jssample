import { Box, Link as MuiLink } from '@mui/material';
import { Hr01, Hr02, Hr03, Hr04 } from '@jssamples/ui';

export function Hrs() {
  return (
    <>
      <Box component="h1">hrタグサンプル集</Box>
      <Box component="div">
        <MuiLink href="/">Go Home</MuiLink>
      </Box>
      <Box component="h2">サンプル1</Box>
      <Hr01 />
      <Box component="h2">サンプル2</Box>
      <Hr02 />
      <Box component="h2">サンプル3</Box>
      <Hr03 />
      <Box component="h2">サンプル4</Box>
      <Hr04 />
    </>
  );
}

export default Hrs;
