import { styled } from '@mui/material';

export const Hr01 = styled('hr')({
  border: 'none',
  borderTop: '3px double #333',
  color: '#333',
  overflow: 'visible',
  textAlign: 'center',
  height: '5px',
  size: "10px",
  '&:after': {
    background: '#fff',
    content: "'§'",
    padding: '0 4px',
    position: 'relative',
    top: '-13px',
  },
});

export default Hr01;
