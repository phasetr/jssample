import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(key: string, name: string, size: number) {
  return { key, name, size };
}

const rows = [
  createData('xs', 'extra-small', 0),
  createData('sm', 'small', 600),
  createData('md', 'medium', 900),
  createData('lg', 'large', 1200),
  createData('xl', 'extra-large', 1536),
];

export function DefaultBreakPointsTable() {
  return (
    <div style={{ width: 300, margin: 'auto' }}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>指定</TableCell>
              <TableCell>正式名称</TableCell>
              <TableCell>サイズ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.key}>
                <TableCell>{row.key}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.size}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DefaultBreakPointsTable;
