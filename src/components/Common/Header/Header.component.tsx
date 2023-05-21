import React, { useState } from "react";
import classNames from "classnames";

import Link from "next/link";
import Image from "next/image";

import { NavBar } from "@components/Common/NavBar";
import { Select } from "@components/UI/Select";
import { currencyOptions } from "@components/UI/Select/constants";
import { Button, ButtonVariantEnum } from "@components/UI/Button";

import styles from "./Header.module.scss";
import { useMediaQuery } from "@mantine/hooks";

export const HeaderComponent = () => {
  const [isOpenHiddenLinks, setIsOpenHiddenLinks] = useState(false);
  const headerClassName = classNames(styles.header, "container");
  const screenLowerThan650px = useMediaQuery("(max-width: 650px)");
  const screenLowerThan550px = useMediaQuery("(max-width: 550px)");

  return (
    <header className={headerClassName}>
      <div className={styles.logoAndNavBarContainer}>
        {screenLowerThan550px && !isOpenHiddenLinks && (
          <div className={styles.logoContainer}>
            <Image src={"/images/logo.png"} fill alt='logo' priority />
          </div>
        )}
        <NavBar
          isOpenHiddenLinks={isOpenHiddenLinks}
          setIsOpenHiddenLinks={setIsOpenHiddenLinks}
        />
      </div>

      {screenLowerThan550px && !isOpenHiddenLinks && (
        <div className={styles.selectAndButtonsContainer}>
          {!screenLowerThan650px && (
            <Select id='currencySelector' options={currencyOptions} />
          )}
          <div className={"buttonsContainer"}>
            {!screenLowerThan550px && (
              <Link href=''>
                <Button text='Sign Up' variant={ButtonVariantEnum.text} />
              </Link>
            )}
            <Link href=''>
              <Button text='Log in' />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

HeaderComponent.displayName = "Header";
