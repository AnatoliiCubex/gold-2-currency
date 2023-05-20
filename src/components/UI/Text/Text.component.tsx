import { PropsWithChildren } from "react";
import classNames from "classnames";

// import { CustomTooltip } from "@components/CustomTooltip";

import { FontWeightEnum, TextProps } from "./Text.types";

import styles from "./Text.module.scss";

const htmlTagMapping = {
  S10: "p",
  S12: "p",
  S14: "p",
  S16: "p",
  S18: "p",
  S20: "p",
  S22: "p",
  S24: "h3",
  S26: "h3",
  S28: "h2",
  S30: "h2",
  S32: "h2",
  S40: "h1",
  S48: "h1",
} as const;

export const TextComponent = ({
  children,
  className,
  dots,
  fontWeight = FontWeightEnum.FW400,
  style,
  textTransform,
  size,
  onClick,
  ...props
}: PropsWithChildren<TextProps>) => {
  const HtmlTag = htmlTagMapping[size];

  const textClass = classNames(
    styles.text,
    " myTransition",
    {
      [styles[`text_size_${size}`]]: size,
      [styles[`text_fontWeight_${fontWeight}`]]: fontWeight,
      [styles[`text_textTransform_${textTransform}`]]: textTransform,
      [styles[`text_dots`]]: dots,
    },
    className
  );

  return (
    <>
      <HtmlTag
        className={textClass}
        onClick={onClick}
        style={{ ...style }}
        {...props}
      >
        {children}
      </HtmlTag>
    </>
  );
};

TextComponent.displayName = "Text";
