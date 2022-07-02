import {
  AppBarWithMenu,
  AppBarWithPrimarySearchField,
  AppBarWithResponsiveMenu,
  AppBarWithSearchField,
  BasicAppBar,
  DenseAppBar, EnableColorOnDarkAppBar,
  InnerLink,
  OuterLink,
  ProminentAppBar
} from "@jssamples/ui";
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
      <Box component="h2">App bar with a primary search field</Box>
      <AppBarWithPrimarySearchField />
      <Box component="h2">Dense App bar</Box>
      <DenseAppBar />
      <Box component="h2">Prominent App Bar</Box>
      <ProminentAppBar />
      <Box component="h2">Bottom App bar</Box>
      <InnerLink
        to="/bottom-app-bar"
        content="Go Bottom App Bar"
      />
      <Box component="h2">TODO: Scroll to Hide App Bar</Box>
      <Box component="h2">TODO: Scroll to elevate App Bar</Box>
      <Box component="h2">TODO: Scroll to see button</Box>
      <Box component="h2">Enable color on darn App Bar</Box>
      <EnableColorOnDarkAppBar />
    </>
  );
}

export default AppBar;
