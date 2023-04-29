import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { withTheme } from "@mui/styles";

export const CommonSection = styled(withTheme(Paper))((props) => ({
  border: `1px solid ${props.theme.palette.primary.main}`,
  padding: props.theme.spacing(2),
}));
