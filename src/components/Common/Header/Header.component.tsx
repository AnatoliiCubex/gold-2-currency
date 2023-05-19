import React from "react";
import classNames from "classnames";

import styles from "./Header.module.scss";
import Image from "next/image";

export const HeaderComponent = () => {
  const headerClassName = classNames(`${styles.header} container`);

  return (
    <header className={headerClassName}>
      <div className={styles.logoContainer}>
        <Image
          src={"/images/logo.png"}
          fill
          sizes='100vw'
          alt='productImg'
          className={styles.productImg}
        />
      </div>
    </header>
  );
};

HeaderComponent.displayName = "Header";
