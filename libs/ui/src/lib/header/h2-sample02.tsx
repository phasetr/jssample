import { styled } from '@mui/material';

export const H2Sample02 = styled('h2')({
  display: 'inline-block',
  color: '#fff',
  background: '#ffaf58',
  padding: '0.5em',
  lineHeight: '1.5',
  verticalAlign: 'middle',
  borderRadius: '30px 0px 0px 30px',
  '&::before': {
    content: '"●"',
    color: '#fff',
    marginRight: '8px',
  },
});
export default H2Sample02;
