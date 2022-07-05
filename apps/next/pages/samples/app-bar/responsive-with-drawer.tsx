import { ResponsiveAppBarWithDrawer } from '@jssamples/ui';
import { Box, Link as MuiLink, List, ListItem, Toolbar } from '@mui/material';

export function ResponsiveWithDrawer() {
  return (
    <>
      <Toolbar />
      <Box component="h1">
        <MuiLink
          href="https://mui.com/material-ui/react-app-bar/"
          target="_blank"
          rel="noreferrer noopener"
        >
          App bar samples: Responsive App bar with drawer
        </MuiLink>
      </Box>
      <List>
        <ListItem>
          <MuiLink href="/">Go Home</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="/samples/app-bar/">App Bar</MuiLink>
        </ListItem>
      </List>
      <Box component="p">
        メニューが上部張り付きで、widthを小さくするとメニューが折り畳まれてハンバーガーアイコンになる
      </Box>
      <ResponsiveAppBarWithDrawer />
    </>
  );
}

export default ResponsiveWithDrawer;
