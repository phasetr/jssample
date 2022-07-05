import { BasicGrid, DefaultBreakPointsTable, GridWithMultipleBreakPoints } from "@jssamples/ui";
import { Link as MuiLink, Box, ListItem, List, Container } from "@mui/material";

export function Grids() {
  return (
    <>
      <Box component={"h1"}>Grid</Box>
      <List>
        <ListItem>
          <MuiLink href={"/"}>Homeに戻る</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink
            href={"https://mui.com/material-ui/react-grid/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mui.com/material-ui/react-grid/
          </MuiLink>
        </ListItem>
      </List>
      <Box component="h2">Default Break Point Table</Box>
      <DefaultBreakPointsTable />
      <Box component={"h2"}>Basic Grid</Box>
      <BasicGrid />
      <Box component={"h2"}>Grid with Multiple Break Points</Box>
      <GridWithMultipleBreakPoints />
      <Box component={"h2"}>
        <MuiLink
          href={"https://mui.com/material-ui/react-container/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fluid
        </MuiLink>
      </Box>
      <Box component={"p"}>
        fluidコンテナの幅はmaxWidthプロパティ値によって制限される.
      </Box>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "5vh" }} />
      </Container>
      <Box component={"hr"} />
      <Box component={"h2"}>Fixed</Box>
      <Box component={"p"}>
        完全に流動的なビューポートに対応しようとするのではなく、
        固定されたサイズのセットで設計する場合はfixed
        propを設定する。max-widthは現在のブレイクポイントのmin-widthと一致する。
      </Box>
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
      </Container>
    </>
  );
}

export default Grids;
