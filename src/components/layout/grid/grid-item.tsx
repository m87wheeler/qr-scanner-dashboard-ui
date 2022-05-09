import * as React from "react";
import { ItemProps, GridItemContainer } from "./styles";

interface Props extends ItemProps, React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}

const GridItem = ({ children, start = 1, span = 12, ...props }: Props) => {
  return (
    <GridItemContainer start={start} span={span} {...props}>
      {children}
    </GridItemContainer>
  );
};

export default GridItem;
