import { Link1, Link2, Link3 } from '@jssamples/ui';
import Box from '@mui/material/Box';
import { Link as ReactLink } from 'react-router-dom';
import { CssBaseline, Link as MuiLink } from '@mui/material';

export function Link() {
  return (
    <>
      <CssBaseline />
      <Box component="h1">aタグサンプル集</Box>
      <MuiLink>
        <ReactLink to="/">Go Home</ReactLink>
      </MuiLink>
      <Box component="h2">
        <ReactLink to="https://web-camp.io/magazine/archives/97816">
          元サイト
        </ReactLink>
      </Box>
      <Link1 to="#" />
      <Link2 to="#" />
      <Link3 to="#" />
    </>
  );
}

export default Link;
