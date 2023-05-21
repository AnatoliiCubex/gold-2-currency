import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { debounce } from "@utils/debounce";
import { DropDownProps } from "./DropDown.types";
import { useClickOutside } from "@mantine/hooks";

export const DropDownComponent = ({
  isOpen,
  setIsOpen,
  variant,
  children,
  addToHeight,
  isInnerHeight,
  tabIndex,
  maxHeight,
  className,
  onClick,
  onKeyUp,
  onBlur,
}: DropDownProps) => {
  const [height, setHeight] = useState(0);
  const dropDown = useRef<HTMLDivElement>(null);
  const ref = useClickOutside(() => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 100);
    }
    return;
  });

  const DropDownClass = classNames(
    "dropDown",
    {
      [`dropDown_variant_${variant}`]: variant,
      "dropDown-active": isOpen,
    },
    className
  );

  const DropDownChildrenClass = classNames("children", {
    [`children_variant_${variant}`]: variant,
  });

  const selectHeight = () => {
    if (isOpen) {
      if (maxHeight) {
        return maxHeight;
      } else {
        return height;
      }
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const updateSize = () => {
      const add = addToHeight ? addToHeight : 190;
      if (dropDown.current !== null) {
        setHeight(
          isInnerHeight
            ? window.innerHeight - 64
            : dropDown.current.offsetHeight + add
        );
      }
    };
    updateSize();
    const DropDownUpdateSize = debounce(updateSize, 500);

    window.addEventListener("resize", DropDownUpdateSize, true);

    return () => {
      window.removeEventListener("resize", DropDownUpdateSize, true);
    };
  }, []);

  return (
    <div
      style={{ maxHeight: `${selectHeight()}px` }}
      className={DropDownClass}
      onClick={onClick}
      tabIndex={tabIndex}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      ref={ref}
    >
      <div ref={dropDown} className={DropDownChildrenClass}>
        {children}
      </div>
    </div>
  );
};

DropDownComponent.displayName = "DropDown";
