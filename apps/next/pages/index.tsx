import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import BookIcon from '@mui/icons-material/Book';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { CssBaseline, Link as MuiLink } from "@mui/material";

type MenuItem = {
  to: string;
  text: string;
  icon: any;
};

const menus: MenuItem[] = [
  { to: '#', text: 'Home (here)', icon: <MailIcon /> },
  { to: '/samples/links', text: 'aタグ', icon: <BookIcon /> },
  { to: '/samples/admin-state', text: '親子コンポーネントの状態管理サンプル', icon: <BookIcon /> },
  { to: '/samples/book-keeper', text: 'Book Keeper', icon: <BookIcon /> },
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
