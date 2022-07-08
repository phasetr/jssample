import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import BookIcon from '@mui/icons-material/Book';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Link as MuiLink } from '@mui/material';

type MenuItem = {
  to: string;
  text: string;
  icon: any;
};

const menus: MenuItem[] = [
  { to: '/', text: 'Home', icon: <MailIcon /> },
  { to: '/book-keeper', text: 'Book Keeper', icon: <BookIcon /> },
];

const externalLinks: MenuItem[] = [
  { to: 'https://mui.com', text: 'MUI', icon: <BookIcon /> },
  {
    to: 'https://mui.com/material-ui/material-icons/',
    text: 'Material Icons',
    icon: <BookIcon />,
  },
];

export function MenuItems() {
  return (
    <>
      <List>
        {menus.map(({ to, text, icon }) => (
          <Link to={to} key={to}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {externalLinks.map(({ to, text, icon }) => (
          <MuiLink href={to} key={to} target="_blank" rel="noopener noreferrer">
            <ListItem key={to} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </MuiLink>
        ))}
      </List>
    </>
  );
}

export default MenuItems;
