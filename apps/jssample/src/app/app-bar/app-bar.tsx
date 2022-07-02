import {
  AppBarWithMenu,
  AppBarWithResponsiveMenu,
  AppBarWithSearchField,
  BasicAppBar,
  InnerLink,
  OuterLink,
} from '@jssamples/ui';
import { Box } from '@mui/material';

export function AppBar() {
  return (
    <>
      <Box component="h1">
        <OuterLink
          href="https://mui.com/material-ui/react-app-bar/"
          key=""
          content="App bar samples"
        />
      </Box>
      <Box component="p">
        <InnerLink to="/" content="Go Home" />
      </Box>
      <Box component="h2">Basic App bar</Box>
      <BasicAppBar />
      <Box component="h2">App bar with menu</Box>
      <AppBarWithMenu />
      <Box component="h2">App bar with responsive menu</Box>
      <AppBarWithResponsiveMenu />
      <Box component="h2">App bar with search field</Box>
      <AppBarWithSearchField />
      <Box component="h2">Responsive App bar with drawer</Box>
      <InnerLink
        to="/responsive-app-bar-with-drawer"
        content="Go Responsive App bar with drawer"
      />
    </>
  );
}

export default AppBar;
