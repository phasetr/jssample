import { styled } from '@mui/styles';
import { Link } from 'react-router-dom';

export interface Link3Props {
  to: string;
}

export function Link3({ to }: Link3Props) {
  return <LinkWrapper3 to={to}>link3</LinkWrapper3>;
}

const LinkWrapper3 = styled(Link)({
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

export default Link3;
