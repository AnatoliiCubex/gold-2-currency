import { useEffect, useState } from "react";

import { useCurrency } from "../../context/CurrencyContext";

import { Input } from "@components/UI/Input";
import { Button, ButtonVariantEnum } from "@components/UI/Button";

import styles from "./PriceCalculator.module.scss";

export const PriceCalculatorComponent = () => {
  const [goldAmount, setGoldAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const { currency } = useCurrency();

  const handleChangeGoldAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseInt(e.target.value);
    if (currency !== null) {
      setGoldAmount(amount);
      setPrice(amount * currency.exchange);
    }
  };

  const handleResetValues = () => {
    setGoldAmount(0);
    setPrice(0);
  };

  useEffect(() => {
    if (currency === null) return;
    setPrice(goldAmount * currency.exchange);
  }, [currency]);

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
        value={`${currency?.value}: ${price.toFixed(2) || ""}`}
        style={{ width: "fit-content" }}
        disabled
      />
      <Button
        text='Reset values'
        variant={ButtonVariantEnum.text}
        width='full'
        className={styles.resetButton}
        onClick={handleResetValues}
      />
    </div>
  );
};

PriceCalculatorComponent.displayName = "PriceCalculator";
