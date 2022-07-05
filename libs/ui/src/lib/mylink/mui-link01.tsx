import { Link as MuiLink, styled } from '@mui/material';

export const MuiLink01 = styled(MuiLink)({
  display: 'inline-block',
  padding: '0.5em 1em',
  textDecoration: 'none',
  background: '#aaa',
  color: 'black',
  borderBottom: 'solid 4px rgb(134, 132, 132)',
  borderRadius: '5px',
  '&:active': {
    transform: 'translateY(4px)',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.2)',
    borderBottom: 'none',
  },
});
export default MuiLink01;
