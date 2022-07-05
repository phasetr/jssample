import Link from 'next/link';
import { Box, Link as MuiLink } from '@mui/material';
import React from 'react';
import { Div01, Div02, Div03 } from '@jssamples/ui';

export function Divs() {
  return (
    <>
      <Box component="h1">divタグサンプル集</Box>
      <Box component="div"><MuiLink href="/">Go Home</MuiLink></Box>
      <Box component="h2">
        <Link
          href="https://web-camp.io/magazine/archives/97816"
          rel="noreferrer noopener"
          passHref
        >
          <MuiLink href="https://web-camp.io/magazine/archives/97816">
            参考サイト
          </MuiLink>
        </Link>
      </Box>
      <Div01>div-sample1</Div01>
      <Div02>div-sample2</Div02>
      <Div03>div-sample3</Div03>
    </>
  );
}

export default Divs;
