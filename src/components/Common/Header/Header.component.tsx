import React from "react";
import classNames from "classnames";

import styles from "./Header.module.scss";

export const HeaderComponent = () => {
  const headerClassName = classNames(`${styles.header} container`);

  return <header className={headerClassName}>header</header>;
};

HeaderComponent.displayName = "Header";
