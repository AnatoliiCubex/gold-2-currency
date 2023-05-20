import React, { useEffect, useRef, useState } from "react";
import { forwardRef } from "react";
import classNames from "classnames";
import { debounce } from "@utils/debounce";
import { DropDownProps } from "./DropDown.types";

export const DropDownComponent = forwardRef<HTMLDivElement, DropDownProps>(
  (
    {
      isOpen,
      variant,
      children,
      addToHeight,
      isInnerHeight,
      onClick,
      onKeyUp,
      tabIndex,
      onBlur,
      maxHeight,
      className,
    },
    ref
  ) => {
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

    const [height, setHeight] = useState(0);
    const dropDown = useRef<HTMLDivElement>(null);

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
  }
);

DropDownComponent.displayName = "DropDown";
