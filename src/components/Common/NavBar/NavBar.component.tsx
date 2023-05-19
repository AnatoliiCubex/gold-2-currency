import classNames from "classnames";
import React, { useState } from "react";
import Link from "next/link";

import { FontWeightEnum, Text, TextSizeEnum } from "@components/UI/Text";
import { navBarLinks } from "./constants";

import styles from "./NavBar.module.scss";

export const NavBarComponent = () => {
  const [activeTab, setActiveTab] = useState(navBarLinks[0]);
  return (
    <nav className={styles.navBar + " myTransition"}>
      <ul>
        {navBarLinks.map((link, index) => (
          <li key={index} onClick={() => setActiveTab(link)}>
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
    </nav>
  );
};

NavBarComponent.displayName = "NavBarComponent";
