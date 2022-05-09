import * as React from "react";
import { AppContainer } from "./styles";
import { io, Socket } from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../../pages/homepage";
import QRPage from "../../pages/qr-page";
import { useStore } from "../../../store/use-store";

const SOCKET_URL = process.env.SOCKET_URL ?? "http://localhost:4001";

export default function App() {
  const { setSocket } = useStore();

  /** create socket connection on load */
  React.useEffect(() => {
    const appSocket: Socket = io(SOCKET_URL);
    setSocket(appSocket);
  }, []);

  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<QRPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}
