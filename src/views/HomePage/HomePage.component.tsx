import React from "react";

import { PriceCalculator } from "@components/PriceCalculator";

import styles from "./HomePage.module.scss";

export const HomePageComponent = () => {
  return (
    <div className={styles.homePage}>
      <PriceCalculator />
    </div>
  );
};

HomePageComponent.displayName = "HomePage";
