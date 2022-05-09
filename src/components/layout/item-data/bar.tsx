import * as React from "react";
import styled from "styled-components";
import { ItemStoreType } from "../../../../store/use-store";
import { theme } from "../../../styles/theme";

const ItemDataContainer = styled.div`
  padding: 1rem;
  background-color: ${theme.palette.white._};
  color: ${theme.palette.white.contrast};
  border-radius: 1rem;

  p {
    &:nth-of-type(2) {
      font-size: 3rem;
      font-weight: 600;
    }
  }
`;

interface Props extends ItemStoreType {
  children?: React.ReactNode;
}

const ItemData = ({ children, ...props }: Props) => {
  return (
    <ItemDataContainer>
      <p>Times reused:</p>
      <p>{props?.count}</p>
      <p>{props?.name}</p>
    </ItemDataContainer>
  );
};

export default ItemData;
