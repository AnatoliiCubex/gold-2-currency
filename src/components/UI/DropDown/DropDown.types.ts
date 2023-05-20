import { PropsWithChildren } from "react";

export type DropDownProps = PropsWithChildren<{
  isOpen: boolean;
  variant: string;
  addToHeight: number;
  isInnerHeight: boolean;
  tabIndex: number;
  maxHeight: number;
  className: string;
  onClick: () => void;
  onKeyUp: () => void;
  onBlur: () => void;
}>;
