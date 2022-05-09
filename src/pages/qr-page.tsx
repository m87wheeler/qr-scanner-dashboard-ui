import * as React from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/use-store";
import { SocketEvent } from "../../types";
import GridItem from "../components/layout/grid/grid-item";
import Page from "../components/layout/page/page";
import Box from "../components/ui/box/box";

interface Props {
  children?: React.ReactNode;
}

const QRPage = ({ children, ...props }: Props) => {
  const { id } = useParams();
  const { socket } = useStore();
  const [submitted, setSubmitted] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [packagingData, setPackagingData] = React.useState<any>(null);
  const [itemUsage, setItemUsage] = React.useState(0);

  /** send socket id to server */
  React.useEffect(() => {
    if (!socket || !id) return;
    socket.emit(SocketEvent.record_item, { id });
  }, [socket, id]);

  React.useEffect(() => {
    if (!id) return;
    const STORAGE_KEY = `again_item_submission_${id}`;
    const STORAGE_ID = id.toString();
    setSubmitted(false);
    socket?.on(SocketEvent.item_recorded, ({ success, data }) => {
      if (data?.itemCount) setItemUsage(data.itemCount);
      if (localStorage.getItem(STORAGE_KEY) === STORAGE_ID) {
        setSubmitted(true);
        return;
      }
      setIsValid(success);
      setPackagingData(data);
      if (success) localStorage.setItem(STORAGE_KEY, STORAGE_ID);
    });
  }, [socket, id]);

  return (
    <Page {...props}>
      {isValid ? (
        <>
          <GridItem start={2} span={10}>
            <img src="/assets/logo.png" alt="Again Logo" width={180} />
          </GridItem>
          <GridItem start={2} span={10}>
            <h2>Thank you for using one of our recycled bottles.</h2>
          </GridItem>
          <GridItem start={2} span={10}>
            <Box>
              <p>This bottle has been reused {itemUsage} times</p>
              <br />
              <p>
                Producing {itemUsage} of these bottles would create ~
                {itemUsage * 503}g of CO
                <sub>2</sub>
              </p>
            </Box>
          </GridItem>
          <GridItem start={4} span={6}>
            <Box variant="white">
              <p>
                Packaging Item: <strong>{packagingData?.name}</strong>
              </p>
              <p>
                Packaging ID: <strong>{id}</strong>
              </p>
            </Box>
          </GridItem>
        </>
      ) : (
        <GridItem start={4} span={6}>
          <h1>
            {submitted
              ? "This item has already been recorded"
              : "Invalid Item ID"}
          </h1>
        </GridItem>
      )}
    </Page>
  );
};

export default QRPage;
