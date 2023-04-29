import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  a: {
    ...theme.typography.body1,
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  b: {
    fontWeight: theme.typography.fontWeightBold,
  },
  blockquote: {
    ...theme.typography.body2,
    borderLeft: `4px solid ${theme.palette.grey[500]}`,
    paddingLeft: theme.spacing(2),
    fontStyle: "italic",
    margin: 0,
  },
  br: {
    display: "block",
    height: theme.spacing(2),
    "&::before": {
      content: '"\\00a0"',
    },
  },
  code: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(0.5),
  },
  em: {
    fontStyle: "italic",
  },
  h1: {
    ...theme.typography.h1,
  },
  h2: {
    ...theme.typography.h2,
  },
  h3: {
    ...theme.typography.h3,
  },
  h4: {
    ...theme.typography.h4,
  },
  h5: {
    ...theme.typography.h5,
    margin: `${theme.spacing(2)} 0`,
  },
  h6: {
    ...theme.typography.h6,
  },
  hr: {
    border: "none",
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    margin: `${theme.spacing(3)} 0`,
  },
  i: {
    fontStyle: "italic",
  },
  img: {
    textAlign: "center",
    maxWidth: "100%",
  },
  li: {
    ...theme.typography.body2,
    marginBottom: theme.spacing(1),
  },
  ol: {
    ...theme.typography.body2,
    margin: 0,
    paddingLeft: theme.spacing(2),
  },
  p: {
    ...theme.typography.body2,
  },
  pre: {
    backgroundColor: theme.palette.mode === "light" ? grey[50] : grey[900],
    color: theme.palette.text.secondary,
    fontWeight: 600,
    padding: theme.spacing(1),
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
  },
  span: {},
  strong: {
    fontWeight: theme.typography.fontWeightBold,
  },
  sub: {
    ...theme.typography.body2,
    fontSize: "0.8em",
    verticalAlign: "sub",
    lineHeight: 0,
  },
  sup: {
    ...theme.typography.body2,
    fontSize: "0.8em",
    verticalAlign: "super",
    lineHeight: 0,
  },
  u: {
    ...theme.typography.body2,
    textDecoration: "underline",
  },
  ul: {
    ...theme.typography.body2,
    margin: 0,
    paddingLeft: theme.spacing(2),
  },
}));
