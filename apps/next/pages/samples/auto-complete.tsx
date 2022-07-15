import { Box, Link as MuiLink } from '@mui/material';
import React from 'react';
import {
  AsynchronousRequests,
  Checkboxes,
  ComboBox,
  ControlledStates,
  CountrySelect,
  DisabledOptions,
  GitHubPicker,
  Grouped,
  MultipleValues,
  PlayGround,
} from '@jssamples/ui';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

export function AutoComplete() {
  return (
    <>
      <Box component="h1">Auto Complete Combo Box</Box>
      <Box component="div">
        <MuiLink href="/">Go Home</MuiLink>
      </Box>
      <Box component="div">
        <Link href="https://mui.com/material-ui/react-autocomplete/" passHref>
          <MuiLink target="_blank" rel="noreferrer noopner">
            Go to mui.com
          </MuiLink>
        </Link>
      </Box>
      <Box component="h2">注意</Box>
      <Typography>まだmui.comの例を全て載せていない.</Typography>
      <Box component="h2">Combo Box</Box>
      <ComboBox />
      <Box component="h2">Play Ground</Box>
      <PlayGround />
      <Box component="h2">Country Select</Box>
      <CountrySelect />
      <Box component="h2">Controlled States</Box>
      <ControlledStates />
      <Box component="h2">Grouped</Box>
      <Grouped />
      <Box component="h2">Disabled Options</Box>
      <DisabledOptions />
      <Box component="h2">Asynchronous Requests</Box>
      <AsynchronousRequests />
      <Box component="h2">Multiple Values</Box>
      <MultipleValues />
      <Box component="h2">Checkboxes</Box>
      <Checkboxes />
      <Box component="h2">GitHub Pickers</Box>
      <GitHubPicker />
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export default AutoComplete;
