import Parent from 'components/admin-state/parent';
import { Box } from '@mui/system';
import { Link as MuiLink } from '@mui/material';

export default function AdminState() {
  return (
    <>
      <Box component="h1">親子コンポーネントの状態管理サンプル</Box>
      <Box component="div">
        <MuiLink href="/" target="_self" rel="nofollow noreferer">
          Go Home
        </MuiLink>
      </Box>
      <Parent />
    </>
  );
}
