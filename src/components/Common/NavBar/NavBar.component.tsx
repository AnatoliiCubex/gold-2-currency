import React, { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import { FontWeightEnum, Text, TextSizeEnum } from "@components/UI/Text";
import { navBarLinks } from "./constants";

import { DropDown } from "@components/UI/DropDown";
import { useMediaQuery } from "@mantine/hooks";

import { Select } from "@components/UI/Select";
import { currencyOptions } from "@components/UI/Select/constants";
import { Button, ButtonVariantEnum } from "@components/UI/Button";

import styles from "./NavBar.module.scss";
import { NavBarProps } from "./NavBar.types";

export const NavBarComponent: React.FC<NavBarProps> = ({
  isOpenHiddenLinks,
  setIsOpenHiddenLinks,
}) => {
  const [activeTab, setActiveTab] = useState(navBarLinks[0]);

  const screenLowerThan650px = useMediaQuery("(max-width: 650px)");
  const screenLowerThan550px = useMediaQuery("(max-width: 550px)");

  return (
    <nav className={styles.navBar + " myTransition"}>
      <ul className={styles.linksList}>
        {navBarLinks.map((link, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(link)}
            className={`link-${link.title.toLowerCase()}`}
          >
            <Link href={link.path}>
              <Text
                size={TextSizeEnum.S14}
                fontWeight={FontWeightEnum.FW600}
                className={classNames(styles.linkText, {
                  [styles.active]: link.title === activeTab.title,
                })}
              >
                {link.title}
              </Text>
            </Link>
          </li>
        ))}

        <li className={styles.hiddenLinksToggle}>
          <div
            onClick={() => setIsOpenHiddenLinks(!isOpenHiddenLinks)}
            className={classNames("burger-icon-container", {
              change: isOpenHiddenLinks,
            })}
          >
            <div className='bar1' />
            <div className='bar2' />
            <div className='bar3' />
          </div>
          <DropDown
            isOpen={isOpenHiddenLinks}
            setIsOpen={setIsOpenHiddenLinks}
            className={styles.hiddenLinksDropDown}
          >
            <ul
              className={styles.hiddenLinksList}
              onClick={() => setIsOpenHiddenLinks(!isOpenHiddenLinks)}
            >
              {navBarLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(link)}
                  className={`dropdown-link-${link.title.toLowerCase()}`}
                  style={{ display: "none" }}
                >
                  <Link href={link.path}>
                    <Text
                      size={TextSizeEnum.S14}
                      fontWeight={FontWeightEnum.FW600}
                      className={classNames(styles.dropDownLinkText, {
                        [styles.active]: link.title === activeTab.title,
                      })}
                    >
                      {link.title}
                    </Text>
                  </Link>
                </li>
              ))}
            </ul>
            {screenLowerThan650px && (
              <Select
                id='dropDownCurrencySelector'
                options={currencyOptions}
                className={styles.dropDownSelect}
              />
            )}
            {screenLowerThan550px && (
              <div className={"buttonsContainer " + styles.dropDownButtons}>
                <Link href=''>
                  <Button
                    text='Sign Up'
                    variant={ButtonVariantEnum.outlined}
                    size='sm'
                  />
                </Link>

                <Link href=''>
                  <Button text='Log in' size='sm' />
                </Link>
              </div>
            )}
          </DropDown>
        </li>
      </ul>
    </nav>
  );
};

NavBarComponent.displayName = "NavBarComponent";
