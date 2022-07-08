import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import BookIcon from '@mui/icons-material/Book';
import ListItem from '@mui/material/ListItem';
import { Box, CssBaseline, Link as MuiLink } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

type MenuItem = {
  to: string;
  text: string;
  icon: any; // TODO
};

const independentPageOrApp: MenuItem[] = [
  {
    to: 'http://localhost:4201',
    text: 'To React (only local)',
    icon: <MailIcon />,
  },
  { to: '#', text: 'Home (here)', icon: <MailIcon /> },
  { to: '/samples/admin-state', text: 'Admin State', icon: <BookIcon /> },
  { to: '/samples/book-keeper', text: 'Book Keeper', icon: <BookIcon /> },
  { to: '/samples/nx-welcome', text: 'Nx Welcome', icon: <BookIcon /> },
];

const componentSample: MenuItem[] = [
  { to: '/samples/app-bar/', text: 'App Bar', icon: <BookIcon /> },
  { to: '/samples/app-bar/bottom', text: 'Bottom App Bar', icon: <BookIcon /> },
  {
    to: '/samples/app-bar/responsive-with-drawer',
    text: 'Responsive App Bar with Drawer',
    icon: <BookIcon />,
  },
  { to: '/samples/accordions', text: 'Accordions', icon: <BookIcon /> },
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
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <CssBaseline />
      <Box component="h1">Next.js</Box>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Independent pages or apps
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            a secondary text sample
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {independentPageOrApp.map(({ to, text, icon }) => (
              <Link href={to} key={to} passHref>
                <MuiLink href={to} key={to}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                </MuiLink>
              </Link>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Component Samples
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            a secondary text sample
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {componentSample.map(({ to, text, icon }) => (
              <Link href={to} key={to} passHref>
                <MuiLink href={to} key={to}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                </MuiLink>
              </Link>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            External Links
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            a secondary text sample
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {externalLinks.map(({ to, text, icon }) => (
              <Link href={to} key={to} passHref>
                <MuiLink
                  href={to}
                  key={to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem key={to} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                </MuiLink>
              </Link>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Index;
