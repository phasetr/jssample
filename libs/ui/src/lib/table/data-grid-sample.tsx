import { DataGrid, GridColDef, GridToolbar, jaJP } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: '10th RANK', width: 110 },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 110,
  },
  {
    field: '9thRank',
    headerName: '9th RANK',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: 'Sagisawa', type: 'Co', '9thRank': 2 },
  { id: 2, lastName: 'Ichinose', type: 'Cu', '9thRank': 3 },
  { id: 3, lastName: 'Kamiya', type: 'Co', '9thRank': 4 },
  { id: 4, lastName: 'Takamori', type: 'Pa', '9thRank': 6 },
  { id: 5, lastName: 'Sakuma', type: 'Cu', '9thRank': 7 },
  { id: 6, lastName: 'Takagaki', type: 'Co', '9thRank': 5 },
  { id: 7, lastName: 'Hayami', type: 'Co', '9thRank': 10 },
  { id: 8, lastName: 'Sato', type: 'Pa', '9thRank': 14 },
  { id: 9, lastName: 'Ogata', type: 'Cu', '9thRank': 9 },
  { id: 10, lastName: 'Ninomiya', type: 'Co', '9thRank': 22 },
];

export function DataGridSample() {
  return (
    <div style={{ height: 410, width: '80%', margin: 30 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: GridToolbar,
        }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
}

export default DataGridSample;
