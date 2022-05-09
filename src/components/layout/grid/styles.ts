import styled from "styled-components";
import { AlignType, JustifyType } from "../../../../types";
import { theme } from "../../../styles/theme";

export interface GridProps {
  height?: string;
  align?: AlignType;
  justify?: JustifyType;
  gap?: number;
}

export const GridContainer = styled.div<GridProps>`
  width: 100%;
  height: ${({ height = "auto" }) => height};
  display: flex;
  flex-flow: column nowrap;
  align-items: ${(p) => p.align};
  justify-content: ${(p) => p.justify};
  gap: ${(p) => `${p.gap * 0.25}rem`};

  @media only screen and (min-width: ${theme.breakpoints.md}px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export interface ItemProps {
  align?: AlignType;
  justify?: JustifyType;
  start?: number | "auto";
  span?: number | "auto";
}

export const GridItemContainer = styled.div<ItemProps>`
  width: 100%;
  grid-column: ${(p) => `${p.start} / span ${p.span}`};
  align-self: ${(p) => p.align};
  justify-self: ${(p) => p.justify};
`;
