import { Box, Link as MuiLink } from '@mui/material';
import BasicTable from './basic-table';
import DataTable from './data-table';
import DefaultBreakPointsTable from './default-break-points-table';
import DenseTable from './dense-table';
import SortingAndSelectingTable from './sorting-and-selecting-table';

export function Tables() {
  return (
    <div>
      <Box component="h1">テーブルサンプル集</Box>
      <MuiLink
        href="https://mui.com/material-ui/react-table/"
        target="_blank"
        rel="noreferrer noopener"
      >
        元サイト
      </MuiLink>
      <BasicTable />
      <DataTable />
      <DefaultBreakPointsTable />
      <DenseTable />
      <SortingAndSelectingTable />
    </div>
  );
}

export default Tables;
