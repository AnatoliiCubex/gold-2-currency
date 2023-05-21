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
import { useCurrency } from "../../../context/CurrencyContext";

export const HeaderComponent = () => {
  const [isOpenHiddenLinks, setIsOpenHiddenLinks] = useState(false);
  const headerClassName = classNames(styles.header, "container");
  const { currency, changeCurrency } = useCurrency();
  const screenLowerThan650px = useMediaQuery("(max-width: 650px)");
  const screenLowerThan550px = useMediaQuery("(max-width: 550px)");
  const screenLowerThan360px = useMediaQuery("(max-width: 360px)");

  return (
    <header className={headerClassName}>
      <div className={styles.logoAndNavBarContainer}>
        {!(isOpenHiddenLinks && screenLowerThan550px) && (
          <div className={styles.logoContainer}>
            <Image src={"/images/logo.png"} fill alt='logo' priority />
          </div>
        )}

        <NavBar
          isOpenHiddenLinks={isOpenHiddenLinks}
          setIsOpenHiddenLinks={setIsOpenHiddenLinks}
        />
      </div>

      {!(isOpenHiddenLinks && screenLowerThan550px) &&
        !screenLowerThan360px && (
          <div className={styles.selectAndButtonsContainer}>
            {!screenLowerThan650px && (
              <Select
                id='currencySelector'
                value={currency}
                options={currencyOptions}
                setOptions={changeCurrency}
              />
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
