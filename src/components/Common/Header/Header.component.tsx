import React from "react";
import classNames from "classnames";

import Link from "next/link";
import Image from "next/image";

import { NavBar } from "@components/Common/NavBar";
import { Select } from "@components/UI/Select";
import { currencyOptions } from "@components/UI/Select/constants";
import { Button, ButtonVariantEnum } from "@components/UI/Button";

import styles from "./Header.module.scss";

export const HeaderComponent = () => {
  const headerClassName = classNames(styles.header, "container");

  return (
    <header className={headerClassName}>
      <div className={styles.logoContainer}>
        <Image src={"/images/logo.png"} fill alt='logo' priority />
      </div>
      <NavBar />
      <Select id='currencySelector' options={currencyOptions} />
      <div className={styles.buttonsContainer}>
        <Link href=''>
          <Button text='Sign up' variant={ButtonVariantEnum.text} />
        </Link>
        <Link href=''>
          <Button text='Login' />
        </Link>
      </div>
    </header>
  );
};

HeaderComponent.displayName = "Header";
