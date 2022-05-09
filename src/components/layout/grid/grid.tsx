import * as React from "react";
import { GridProps, GridContainer } from "./styles";

interface Props extends GridProps, React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}

const Grid = ({
  children,
  gap = 0,
  align = "center",
  justify = "center",
  ...props
}: Props) => {
  return (
    <GridContainer gap={gap} align={align} justify={justify} {...props}>
      {children}
    </GridContainer>
  );
};

export default Grid;
