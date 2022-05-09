import * as React from "react";
import { BoxContainer, BoxProps } from "./styles";

interface Props extends BoxProps, React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}

const Box = ({
  children,
  variant = "secondary",
  align = "center",
  ...props
}: Props) => {
  return (
    <BoxContainer variant={variant} align="center" {...props}>
      {children}
    </BoxContainer>
  );
};

export default Box;
