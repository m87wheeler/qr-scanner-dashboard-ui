export type ColorVariantType = "primary" | "secondary" | "white";
export type AlignType =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "auto";
export type JustifyType =
  | AlignType
  | "space-between"
  | "space-evenly"
  | "space-around";
export type PaletteType = {
  [variant in ColorVariantType | string]: {
    _: string;
    contrast?: string;
  };
};

export interface ITheme {
  palette: PaletteType;
  font: { family: { sans: string; serif?: string } };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}

export interface ItemType {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export enum SocketEvent {
  connection = "connection",
  record_item = "add_item",
  item_recorded = "item_recorded",
}

export type SocketResponseType = { success: boolean; data: any };
