import { styled } from '@mui/styles';
import { Link } from 'react-router-dom';

export interface Link1Props {
  to: string;
}

export function Link1({ to }: Link1Props) {
  return <LinkWrapper1 to={to}>link1</LinkWrapper1>;
}

const LinkWrapper1 = styled(Link)({
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

export default Link1;
