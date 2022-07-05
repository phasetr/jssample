import Link from 'next/link';
import { Box, Link as MuiLink } from '@mui/material';
import React from 'react';
import { MuiLink01, MuiLink02, MuiLink03 } from '@jssamples/ui';

export default function Links() {
  return (
    <>
      <Box component="h1">aタグサンプル集</Box>
      <Box component="div">
        <Link href="/" passHref>
          <MuiLink href="/" target="_self" rel="nofollow noreferer">
            Go Home
          </MuiLink>
        </Link>
      </Box>
      <Box component="h2">
        <MuiLink
          href="https://web-camp.io/magazine/archives/97816"
          target="_self"
          rel="nofollow noreferer"
        >
          参考サイト
        </MuiLink>
      </Box>
      <Link href="#" passHref>
        <MuiLink01 href="#" target="_self" rel="nofollow noreferer">
          link01
        </MuiLink01>
      </Link>
      <Link href="#" passHref>
        <MuiLink02 href="#" target="_self" rel="nofollow noreferer">
          link02
        </MuiLink02>
      </Link>
      <Link href="#" passHref>
        <MuiLink03 href="#" target="_self" rel="nofollow noreferer">
          link03
        </MuiLink03>
      </Link>
    </>
  );
}
