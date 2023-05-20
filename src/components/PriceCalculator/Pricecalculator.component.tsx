import { useState } from "react";

import { Input } from "@components/UI/Input";

import styles from "./PriceCalculator.module.scss";

export const PriceCalculatorComponent = () => {
  const [goldAmount, setGoldAmount] = useState(1);
  const [price, setPrice] = useState(1);

  const handleChangeGoldAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseInt(e.target.value);
    setGoldAmount(amount);
    setPrice(amount * 10);
  };

  return (
    <div className={styles.calculator}>
      <Input
        type='number'
        id='goldAmount'
        value={goldAmount || ""}
        onChange={handleChangeGoldAmount}
        placeholder='Amount of gold'
        hasError={goldAmount < 0}
        errorMessage={goldAmount < 0 ? "Negative numbers >_<" : ""}
      />
      <Input id='price' value={`USD: ${price || ""}`} disabled />
    </div>
  );
};

PriceCalculatorComponent.displayName = "PriceCalculator";
