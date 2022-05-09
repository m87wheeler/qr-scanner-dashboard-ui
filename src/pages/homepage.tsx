import * as React from "react";
import { useStore } from "../../store/use-store";
import ItemData from "../components/layout/item-data/bar";
import GridItem from "../components/layout/grid/grid-item";
import Page from "../components/layout/page/page";
import { SocketEvent } from "../../types";

interface Props {
  children?: React.ReactNode;
}

const Homepage = ({ children, ...props }: Props) => {
  const { socket, items, updateItem } = useStore();

  React.useEffect(() => {
    socket?.on(SocketEvent.item_recorded, ({ ...args }) => {
      if (!args?.data) return;
      updateItem(args?.data?.item, args?.data?.itemCount);
    });
  }, [socket]);

  return (
    <Page {...props}>
      <GridItem start={2} span={10}>
        <h1>Dashboard</h1>
      </GridItem>
      {items.map((item, i) => (
        <GridItem key={i} start={3} span={8}>
          <ItemData {...item} />
        </GridItem>
      ))}
    </Page>
  );
};

export default Homepage;
