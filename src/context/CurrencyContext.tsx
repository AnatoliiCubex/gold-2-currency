import { currencyOptions } from "@components/UI/Select/constants";
import { IconsEnum } from "@components/UI/SvgIcon";
import React, { ReactNode, useContext, useState } from "react";
import { SingleValue } from "react-select";

type SelectOptionType = {
  label: string;
  value: string;
  icon?: IconsEnum;
  exchange: number;
} | null;

export type CurrencyContextType = {
  currency: SingleValue<SelectOptionType>;
  changeCurrency: (newValue: SingleValue<SelectOptionType>) => void;
};

export const currencyContextDefaultValues: CurrencyContextType = {
  currency: {
    value: "USD",
    label: "USD",
    icon: IconsEnum.usa,
    exchange: 1,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeCurrency: () => {},
};

const CurrencyContext = React.createContext<CurrencyContextType>(
  currencyContextDefaultValues
);

export function useCurrency() {
  return useContext(CurrencyContext);
}

type Props = {
  children: ReactNode;
};

export function CurrencyProvider({ children }: Props) {
  const [currency, setCurrency] = useState<SingleValue<SelectOptionType>>(
    currencyOptions[0]
  );

  const changeCurrency = (newValue: SingleValue<SelectOptionType>) => {
    setCurrency(newValue);
  };

  const value = {
    currency,
    changeCurrency,
  };

  return (
    <>
      <CurrencyContext.Provider value={value}>
        {children}
      </CurrencyContext.Provider>
    </>
  );
}
