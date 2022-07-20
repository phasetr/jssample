import { Box, Link as MuiLink, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { Hr03 } from "@jssamples/ui";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { blue, green, red } from "@mui/material/colors";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500]
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500]
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500]
  }
}));

export function Responsive() {
  const matches: boolean = useMediaQuery("(min-width:577px)");

  return (<>
    <Box component="h1">Responsive: MUI</Box>
    <Box component="div">
      <Link href="/" passHref>
        <MuiLink target="_self" rel="nofollow noreferer">
          Go Home
        </MuiLink>
      </Link>
      {" | "}
      <Link href="https://zenn.dev/tns_00/articles/material-ui-styling" passHref>
        <MuiLink target="_self" rel="nofollow noreferer">
          Material UIでのレスポンシブサイト作成
        </MuiLink>
      </Link>
    </Box>
    <Hr03 />
    <Box component="h2">media query</Box>
    <Box component="span" sx={{
      fontSize: "1rem",
      "@media screen and (min-width:600px)": {
        fontSize: "2rem",
        width: ".8rem"
      }
    }}>
      600px以上で巨大化
    </Box>
    <Box component="h2">useMediaQuery</Box>
    {matches ? (
      <Box component="div">
        <Typography sx={{ fontSize: "2rem" }}>577px以上で表示</Typography>
      </Box>
    ) : (
      <Box></Box>
    )}
    <Box component="h2">themeのbreakpoints利用その1</Box>
    <Box component="p">xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536</Box>
    <Box
      component="div"
      sx={{
        display: { xs: "none", sm: "block" }
      }}
    >
      <Typography sx={{ fontSize: "2rem" }}>600px以上で表示</Typography>
    </Box>
    <Box component="h2">themeのbreakpoints利用その2</Box>
    <Root>
      <Typography>down(md): red</Typography>
      <Typography>up(md): blue</Typography>
      <Typography>up(lg): green</Typography>
    </Root>
  </>);
}

export default Responsive;
