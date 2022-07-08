import { Box, Link as MuiLink } from '@mui/material';
import {
  BasicAccordion,
  ControlledAccordion,
  CustomizationSample,
  Hr03,
} from '@jssamples/ui';

export function Accordions() {
  return (
    <>
      <Box component="h1">Accordions</Box>
      <Box component="div">
        <MuiLink href="/" target="_self" rel="nofollow noreferer">
          Go Home
        </MuiLink>
      </Box>
      <Box component="h2">Basic Accordion</Box>
      <BasicAccordion />
      <Hr03 />
      <Box component="h2">Controlled Accordion</Box>
      <ControlledAccordion />
      <Hr03 />
      <Box component="h2">Customization Sample</Box>
      <CustomizationSample />
      <Hr03 />
    </>
  );
}

export default Accordions;
