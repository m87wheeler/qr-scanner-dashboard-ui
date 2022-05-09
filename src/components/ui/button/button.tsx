import * as React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button``;

interface Props {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
