import Link from 'next/link';
import { Box, Link as MuiLink } from '@mui/material';
import React from 'react';
import {
  BasicTable,
  DataGridSample,
  DataTable,
  DefaultBreakPointsTable,
  DenseTable,
  Hr03,
  SortingAndSelectingTable,
} from '@jssamples/ui';

export function Tables() {
  return (
    <>
      <Box component="h1">テーブルサンプル集</Box>
      <Box component="div">
        <Link href="/" passHref>
          <MuiLink href="/" target="_self" rel="nofollow noreferer">
            Go Home
          </MuiLink>
        </Link>
      </Box>
      <MuiLink
        href="https://mui.com/material-ui/react-table/"
        target="_blank"
        rel="noreferrer noopener"
      >
        元サイト
      </MuiLink>
      <Box component="h2">Basic Table</Box>
      <BasicTable />
      <Hr03 />
      <Box component="h2">Data Table</Box>
      <DataTable />
      <Hr03 />
      <Box component="h2">Default Break Points Table</Box>
      <DefaultBreakPointsTable />
      <Hr03 />
      <Box component="h2">Dense Table</Box>
      <DenseTable />
      <Hr03 />
      <Box component="h2">Sorting and Selecting Tablw</Box>
      <SortingAndSelectingTable />
      <Hr03 />
      <Box component={'h2'}>Data Grid</Box>
      <DataGridSample />
    </>
  );
}

export default Tables;
