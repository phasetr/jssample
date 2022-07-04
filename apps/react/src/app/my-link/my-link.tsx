import { InnerLink, Link1, Link2, Link3, OuterLink } from '@jssamples/ui';
import Box from '@mui/material/Box';
import { WithLeftMenu } from '@jssamples/ui';

export function MyLink() {
  return (
    <WithLeftMenu>
      <Box component="h1">aタグサンプル集</Box>
      <Box component="p">
        <InnerLink to="/" content="Go Home" />
      </Box>
      <Box component="h2">
        <OuterLink
          href="https://web-camp.io/magazine/archives/97816"
          key=""
          content="元サイト"
        />
      </Box>
      <Link1 to="#" />
      <Link2 to="#" />
      <Link3 to="#" />
    </WithLeftMenu>
  );
}

export default MyLink;
