import { useState } from "react";

import { Input } from "@components/UI/Input";

import styles from "./PriceCalculator.module.scss";
import { Button, ButtonVariantEnum } from "@components/UI/Button";

export const PriceCalculatorComponent = () => {
  const [goldAmount, setGoldAmount] = useState(0);
  const [price, setPrice] = useState(0);

  const handleChangeGoldAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseInt(e.target.value);
    setGoldAmount(amount);
    setPrice(amount * 10);
  };

  const handleResetValues = () => {
    setGoldAmount(0);
    setPrice(0);
  };

  return (
    <div className={styles.calculator}>
      <Input
        type='number'
        id='goldAmount'
        value={goldAmount || ""}
        label='Enter gold amount'
        onChange={handleChangeGoldAmount}
        hasError={goldAmount < 0}
        errorMessage={goldAmount < 0 ? "Negative numbers >_<" : ""}
        style={{ width: "fit-content" }}
      />
      <Input
        id='price'
        label='Price'
        value={goldAmount > 0 ? `USD: ${price || ""}` : ""}
        disabled
        style={{ width: "fit-content" }}
      />
      <Button
        text='Reset'
        variant={ButtonVariantEnum.text}
        width='full'
        className={styles.resetButton}
        onClick={handleResetValues}
      />
    </div>
  );
};

PriceCalculatorComponent.displayName = "PriceCalculator";
