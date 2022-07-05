import { Link as MuiLink, styled } from '@mui/material';

export const MuiLink03 = styled(MuiLink)({
  display: 'inline-block',
  padding: '2em',
  color: 'skyblue',
  border: 'solid 2px skyblue',
  borderRadius: '5px',
  transition: '0.3s',
  '&:active': {
    background: 'skyblue',
    color: '#fff',
  },
});

export default MuiLink03;
