import styled from "styled-components";
import { AlignType, ColorVariantType } from "../../../../types";
import { theme } from "../../../styles/theme";

export interface BoxProps {
  variant?: ColorVariantType;
  align?: AlignType;
}

export const BoxContainer = styled.div<BoxProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: ${(p) => p.align};
  padding: 2rem;
  background-color: ${(p) => theme.palette[p.variant]._};
  color: ${(p) => theme.palette[p.variant].contrast};
`;
