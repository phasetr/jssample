import { Link as ReactLink } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Link as MuiLink } from '@mui/material';
import List from '@mui/material/List';

type MenuItem = {
  to: string;
  text: string;
  icon: any;
};

const menus: MenuItem[] = [
  { to: '/', text: 'Home (here)', icon: <HomeIcon /> },
  { to: '/app-bar', text: 'App Bar', icon: <HomeIcon /> },
  { to: '/nx-welcome', text: 'Nx Welcome', icon: <BookIcon /> },
  { to: '/my-link', text: 'Link', icon: <BookIcon /> },
];

const externalLinks: MenuItem[] = [
  { to: 'https://mui.com', text: 'MUI', icon: <BookIcon /> },
  {
    to: 'https://mui.com/material-ui/material-icons/',
    text: 'Material Icons',
    icon: <BookIcon />,
  },
];

export function App() {
  return (
    <>
      <List>
        {menus.map(({ to, text, icon }) => (
          <ReactLink to={to} key={to}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </ReactLink>
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

export default App;
