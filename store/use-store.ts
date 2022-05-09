import { Socket } from "socket.io-client";
import create from "zustand";
import { ItemType } from "../types";

export interface ItemStoreType extends ItemType {
  count: number;
}

type StoreType = {
  socket: Socket;
  setSocket: (socket: Socket) => void;
  items: ItemStoreType[];
  updateItem: (item: ItemType, itemCount: number) => void;
};

export const useStore = create<StoreType>((set, get) => ({
  socket: null,
  setSocket: (socket) => {
    set({ socket });
  },
  items: [],
  updateItem: (item, itemCount) => {
    set((state) => ({
      ...state,
      items: updateItemsArray(state, item, itemCount),
    }));
  },
}));

function updateItemsArray(
  state: StoreType,
  item: ItemType,
  count: number
): ItemStoreType[] {
  const itemExists = state.items.find((n) => n.id === item.id);
  if (!itemExists) return [...state.items, { ...item, count }];
  return [...state.items];
}
