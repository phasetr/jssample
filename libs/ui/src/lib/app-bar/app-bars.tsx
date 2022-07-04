import { Box, Link as MuiLink } from '@mui/material';
import BasicAppBar from './basic-app-bar';
import AppBarWithMenu from './app-bar-with-menu';
import AppBarWithResponsiveMenu from './app-bar-with-responsive-menu';
import AppBarWithSearchField from './app-bar-with-search-field';
import AppBarWithPrimarySearchField from './app-bar-with-primary-search-field';
import DenseAppBar from './dense-app-bar';
import ProminentAppBar from './prominent-app-bar';
import EnableColorOnDarkAppBar from './enable-color-on-dark-app-bar';

export function AppBars() {
  return (
    <>
      <Box component="h1">
        <MuiLink
          href="https://mui.com/material-ui/react-app-bar/"
          rel="noopener noreferer"
        >
          App bar samples
        </MuiLink>
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
      <p>Go Responsive App bar with drawer</p>
      <Box component="h2">App bar with a primary search field</Box>
      <AppBarWithPrimarySearchField />
      <Box component="h2">Dense App bar</Box>
      <DenseAppBar />
      <Box component="h2">Prominent App Bar</Box>
      <ProminentAppBar />
      <Box component="h2">Bottom App bar</Box>
      <p>Go Bottom App Bar</p>
      <Box component="h2">TODO: Scroll to Hide App Bar</Box>
      <Box component="h2">TODO: Scroll to elevate App Bar</Box>
      <Box component="h2">TODO: Scroll to see button</Box>
      <Box component="h2">Enable color on darn App Bar</Box>
      <EnableColorOnDarkAppBar />
    </>
  );
}
export default AppBars;
