import classNames from "classnames";
import React, { useState } from "react";
import Link from "next/link";

import { FontWeightEnum, Text, TextSizeEnum } from "@components/UI/Text";
import { navBarLinks } from "./constants";

import styles from "./NavBar.module.scss";
import { DropDown } from "@components/UI/DropDown";
import { IconsEnum, SvgIcon } from "@components/UI/SvgIcon";

export const NavBarComponent = () => {
  const [activeTab, setActiveTab] = useState(navBarLinks[0]);
  const [isOpenHiddenLinks, setIsOpenHiddenLinks] = useState(false);

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
          <SvgIcon
            src={IconsEnum.burger}
            onClick={() => setIsOpenHiddenLinks(!isOpenHiddenLinks)}
          />
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
                      className={classNames(styles.linkText, {
                        [styles.active]: link.title === activeTab.title,
                      })}
                    >
                      {link.title}
                    </Text>
                  </Link>
                </li>
              ))}
            </ul>
          </DropDown>
        </li>
      </ul>
    </nav>
  );
};

NavBarComponent.displayName = "NavBarComponent";
