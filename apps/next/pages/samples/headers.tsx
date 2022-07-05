import { H2Sample01, H2Sample02, H2Sample03, H2Sample04 } from '@jssamples/ui';
import { Box, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function ReactHeaders() {
  return (
    <>
      <Box component="h1">hタグサンプル集</Box>
      <Box component="div">
        <Link href="/" passHref>
          <MuiLink href="/" target="_self" rel="nofollow noreferer">
            Go Home
          </MuiLink>
        </Link>
      </Box>
      <Link href="https://web-camp.io/magazine/archives/97816" passHref>
        <MuiLink
          href="https://web-camp.io/magazine/archives/97816"
          target="_blank"
          rel="noreferrer noopener"
        >
          元サイト
        </MuiLink>
      </Link>
      <H2Sample01>h2-sample1</H2Sample01>
      <H2Sample02>h2-sample2</H2Sample02>
      <H2Sample03>h2-sample3</H2Sample03>
      <H2Sample04>h2-sample4</H2Sample04>
    </>
  );
}
