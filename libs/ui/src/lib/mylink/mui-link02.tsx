import { Link as MuiLink, styled } from '@mui/material';

export const MuiLink02 = styled(MuiLink)({
  display: 'inline-block',
  color: 'black',
  width: '200px',
  height: '200px',
  lineHeight: '200px',
  fontSize: '15px',
  borderRadius: '50%',
  textAlign: 'center',
  overflow: 'hidden',
  fontWeight: 'bold',
  backgroundImage: 'linear-gradient(#e8e8e8 0%, #d6d6d6 100%)',
  textShadow: '1px 1px 1px rgba(255, 255, 255, 0.66)',
  boxShadow:
    'inset 0 2px 0 rgba(255, 255, 255, 0.5), 0 2px 2px rgba(0, 0, 0, 0.19)',
  borderBottom: 'solid 2px #b5b5b5',
  '&:active': {
    boxShadow:
      'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 2px rgba(0, 0, 0, 0.19)',
    borderBottom: 'none',
  },
});

export default MuiLink02;
