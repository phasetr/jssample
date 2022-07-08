import { Box, Link as MuiLink } from '@mui/material';
import {
  BasicMasonry,
  ImageMasonry,
  ItemsWithVariableHeight,
} from '@jssamples/ui';
import Link from 'next/link';

export function Masonries() {
  return (
    <>
      <Box component="h1">Masonry</Box>
      <Box component="div">
        <MuiLink href="/" target="_self" rel="nofollow noreferer">
          Go Home
        </MuiLink>
      </Box>
      <Box component="h2">Basic Masonry</Box>
      <BasicMasonry />
      <Box component="h2">Image Masonry</Box>
      <ImageMasonry />
      <Box component="h2">Items with Variable Heigths</Box>
      <ItemsWithVariableHeight />
      <Box component="h2">For others</Box>
      <Box component="p">
        See the samples in{' '}
        <Link href="https://mui.com/material-ui/react-masonry/" passHref>
          <a rel="noreferrer noopener">the mui site</a>
        </Link>
        .
      </Box>
    </>
  );
}

export default Masonries;
