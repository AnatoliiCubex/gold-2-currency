import { CSSProperties } from "react";

export enum IconsEnum {
  australia = "/icons/color/australia.svg",
  canada = "/icons/color/canada.svg",
  eu = "/icons/color/eu.svg",
  uk = "/icons/color/uk.svg",
  usa = "/icons/color/usa.svg",

  loader = "/icons/stroke/loader.svg",
  dots = "/icons/stroke/dots.svg",
  burger = "/icons/stroke/burger.svg",
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: "0" | "90" | "180" | "270";
  className?: string;
  style?: CSSProperties;
};
