import { styled } from '@mui/material';

export const H2Sample04 = styled("h2")({
  position: "relative",
  padding: "5px 5px 5px 42px",
  background: "#ffaf58",
  fontSize: "20px",
  color: "white",
  marginLeft: "-10px",
  lineHeight: "1.3",
  zIndex: "-1",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "-2px",
    top: "-2px",
    border: "none",
    borderLeft: "solid 40px white",
    borderBottom: "solid 79px transparent",
    zIndex: "-2",
  },
});
export default H2Sample04;
