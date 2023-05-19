import React from "react";
import classNames from "classnames";
import Image from "next/image";

import { NavBar } from "../NavBar";

import styles from "./Header.module.scss";

export const HeaderComponent = () => {
  const headerClassName = classNames(`${styles.header} container`);

  return (
    <header className={headerClassName}>
      <div className={styles.logoContainer}>
        <Image src={"/images/logo.png"} fill alt='logo' priority />
      </div>
      <NavBar />
    </header>
  );
};

HeaderComponent.displayName = "Header";
