import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
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
};

const independentPageOrApp: MenuItem[] = [
  { to: 'http://localhost:4201', text: 'To React (only local)' },
  { to: '#', text: 'Home (here)' },
  { to: '/samples/dashboard', text: 'Responsive Dashboard' },
  { to: '/samples/admin-state', text: 'Admin State' },
  { to: '/samples/book-keeper', text: 'Book Keeper' },
  { to: '/samples/nx-welcome', text: 'Nx Welcome' },
];

const componentSample: MenuItem[] = [
  { to: '/samples/accordions', text: 'Accordions' },
  { to: '/samples/app-bar/', text: 'App Bar' },
  { to: '/samples/app-bar/bottom', text: 'Bottom App Bar' },
  {
    to: '/samples/app-bar/responsive-with-drawer',
    text: 'Responsive App Bar with Drawer',
  },
  { to: '/samples/auto-complete', text: 'Auto Complete, Combo Box' },
  { to: '/samples/divs', text: 'Divs' },
  { to: '/samples/grids', text: 'Grids' },
  { to: '/samples/headers', text: 'Headers' },
  { to: '/samples/hrs', text: 'Hrs' },
  { to: '/samples/links', text: 'Links' },
  { to: '/samples/masonries', text: 'Masonries' },
  { to: '/samples/paging', text: 'ページング: useTransition' },
  { to: '/samples/react-hook-form', text: 'React Hook Form' },
  { to: '/samples/tables', text: 'Tables' },
];

const externalLinks: MenuItem[] = [
  { to: 'https://mui.com', text: 'MUI' },
  { to: 'https://mui.com/material-ui/material-icons/', text: 'Material Icons' },
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
            {independentPageOrApp.map(({ to, text }) => (
              <Link href={to} key={to} passHref>
                <MuiLink href={to} key={to}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <BookIcon />
                      </ListItemIcon>
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
            {componentSample.map(({ to, text }) => (
              <Link href={to} key={to} passHref>
                <MuiLink href={to} key={to}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <BookIcon />
                      </ListItemIcon>
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
            {externalLinks.map(({ to, text }) => (
              <Link href={to} key={to} passHref>
                <MuiLink
                  href={to}
                  key={to}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem key={to} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <BookIcon />
                      </ListItemIcon>
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
