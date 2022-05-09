import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const PageContainer = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  overflow: hidden;
  background-color: ${theme.palette.primary._};
  color: ${theme.palette.primary.contrast};
`;
