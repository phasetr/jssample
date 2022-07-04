import { Box, Link as MuiLink } from '@mui/material';
import { WithLeftMenu } from '@jssamples/ui';
import CssBaseline from '@mui/material/CssBaseline';

export function App() {
  return (
    <>
      <CssBaseline />
      <WithLeftMenu>
        <Box component="h1">React Home</Box>
        <Box component="p">
          ルーター設定が面倒なのでできる限りNext版を基本にする
        </Box>
        <MuiLink href="http://localhost:3001">Go to Next.js</MuiLink>
      </WithLeftMenu>
    </>
  );
}

export default App;
