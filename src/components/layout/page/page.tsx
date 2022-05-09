import * as React from "react";
import Grid from "../grid/grid";
import { PageContainer } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Page = ({ children, ...props }: Props) => {
  return (
    <PageContainer {...props}>
      <Grid gap={4} justify="center">
        {children}
      </Grid>
    </PageContainer>
  );
};

export default Page;
