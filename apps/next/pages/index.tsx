import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import BookIcon from '@mui/icons-material/Book';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Box, CssBaseline, Link as MuiLink } from '@mui/material';

type MenuItem = {
  to: string;
  text: string;
  icon: any; // TODO
};

const menus: MenuItem[] = [
  { to: 'http://localhost:3002', text: 'To React (only local)', icon: <MailIcon /> },
  { to: '#', text: 'Home (here)', icon: <MailIcon /> },
  { to: '/samples/app-bar/', text: 'App Bar', icon: <BookIcon /> },
  { to: '/samples/app-bar/bottom', text: 'Bottom App Bar', icon: <BookIcon /> },
  {
    to: '/samples/app-bar/responsive-with-drawer',
    text: 'Responsive App Bar with Drawer',
    icon: <BookIcon />,
  },
  { to: '/samples/admin-state', text: 'Admin State', icon: <BookIcon /> },
  { to: '/samples/book-keeper', text: 'Book Keeper', icon: <BookIcon /> },
  { to: '/samples/divs', text: 'Divs', icon: <BookIcon /> },
  { to: '/samples/grids', text: 'Grids', icon: <BookIcon /> },
  { to: '/samples/headers', text: 'Headers', icon: <BookIcon /> },
  { to: '/samples/hrs', text: 'Hrs', icon: <BookIcon /> },
  { to: '/samples/links', text: 'Links', icon: <BookIcon /> },
  { to: '/samples/tables', text: 'Tables', icon: <BookIcon /> },
];

const externalLinks: MenuItem[] = [
  { to: 'https://mui.com', text: 'MUI', icon: <BookIcon /> },
  {
    to: 'https://mui.com/material-ui/material-icons/',
    text: 'Material Icons',
    icon: <BookIcon />,
  },
];

export function Index() {
  return (
    <>
      <CssBaseline />
      <Box component="h1">Next.js</Box>
      <List>
        {menus.map(({ to, text, icon }) => (
          <MuiLink href={to} key={to}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </MuiLink>
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

export default Index;
