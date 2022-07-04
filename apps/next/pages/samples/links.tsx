import NextLink from 'next/link';
import { Box, Link as MuiLink, styled } from '@mui/material';
import React from 'react';

export default function Links() {
  return (
    <>
      <Box component="h1">aタグサンプル集</Box>
      <Box component="div">
        <MuiLink href="/" target="_self" rel="nofollow noreferer">
          Go Home
        </MuiLink>
      </Box>
      <Box component="h2">
        <MuiLink
          href="https://web-camp.io/magazine/archives/97816"
          target="_self"
          rel="nofollow noreferer"
        >
          元サイト
        </MuiLink>
      </Box>
      <NextLink href="#">
        <MuiLinkWrapper01 href="#" target="_self" rel="nofollow noreferer">
          link01
        </MuiLinkWrapper01>
      </NextLink>
      <NextLink href="#">
        <MuiLinkWrapper02 href="#" target="_self" rel="nofollow noreferer">
          link02
        </MuiLinkWrapper02>
      </NextLink>
      <NextLink href="#">
        <MuiLinkWrapper03 href="#" target="_self" rel="nofollow noreferer">
          link03
        </MuiLinkWrapper03>
      </NextLink>
    </>
  );
}

export const MuiLinkWrapper01 = styled(MuiLink)({
  display: 'inline-block',
  padding: '0.5em 1em',
  textDecoration: 'none',
  background: '#aaa',
  color: 'black',
  borderBottom: 'solid 4px rgb(134, 132, 132)',
  borderRadius: '5px',
  '&:active': {
    transform: 'translateY(4px)',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.2)',
    borderBottom: 'none',
  },
});

const MuiLinkWrapper02 = styled(MuiLink)({
  display: 'inline-block',
  color: 'black',
  width: '200px',
  height: '200px',
  lineHeight: '200px',
  fontSize: '15px',
  borderRadius: '50%',
  textAlign: 'center',
  overflow: 'hidden',
  fontWeight: 'bold',
  backgroundImage: 'linear-gradient(#e8e8e8 0%, #d6d6d6 100%)',
  textShadow: '1px 1px 1px rgba(255, 255, 255, 0.66)',
  boxShadow:
    'inset 0 2px 0 rgba(255, 255, 255, 0.5), 0 2px 2px rgba(0, 0, 0, 0.19)',
  borderBottom: 'solid 2px #b5b5b5',
  '&:active': {
    boxShadow:
      'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 2px rgba(0, 0, 0, 0.19)',
    borderBottom: 'none',
  },
});

const MuiLinkWrapper03 = styled(MuiLink)({
  display: 'inline-block',
  padding: '2em',
  color: 'skyblue',
  border: 'solid 2px skyblue',
  borderRadius: '5px',
  transition: '0.3s',
  '&:active': {
    background: 'skyblue',
    color: '#fff',
  },
});
