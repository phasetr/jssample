import { Box, Link as MuiLink } from '@mui/material';
import Root from '../../components/book-keeper/root';

export default function BookKeeper() {
  return (
    <>
      <Box component="h1">
        子コンポーネントの制御：React Routerからの書き直し
      </Box>
      <Box component="div">
        <MuiLink href="/" target="_self" rel="nofollow noreferer">
          Go Home
        </MuiLink>
      </Box>

      <Root />
    </>
  );
}
