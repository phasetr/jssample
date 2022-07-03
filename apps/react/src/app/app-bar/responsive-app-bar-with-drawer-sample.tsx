import {
  InnerLink,
  OuterLink,
  ResponsiveAppBarWithDrawer,
} from '@jssamples/ui';
import { Box, ListItem, Toolbar } from '@mui/material';
import List from '@mui/material/List';

export function ResponsiveAppBarWithDrawerSample() {
  return (
    <>
      <Toolbar />
      <Box component="h1">
        <OuterLink
          href="https://mui.com/material-ui/react-app-bar/"
          key=""
          content="App bar samples: Responsive App bar with drawer"
        />
      </Box>
      <List>
        <ListItem>
          <InnerLink to="/" content="Go Home" />
        </ListItem>
        <ListItem>
          <InnerLink to="/app-bar" content="Go App Bar" />
        </ListItem>
      </List>
      <Box component="p">
        メニューが上部張り付きで、widthを小さくするとメニューが折り畳まれてハンバーガーアイコンになる
      </Box>
      <ResponsiveAppBarWithDrawer />
    </>
  );
}

export default ResponsiveAppBarWithDrawerSample;
