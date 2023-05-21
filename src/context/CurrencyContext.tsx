import { currencyOptions } from "@components/UI/Select/constants";
import { IconsEnum } from "@components/UI/SvgIcon";
import React, { ReactNode, useContext, useState } from "react";

export type CurrencyContextType = {
  currency: {
    value: string;
    label: string;
    icon?: IconsEnum;
  };
  changeCurrency: (info: {
    value: string;
    label: string;
    icon?: IconsEnum;
  }) => void;
};

export const currencyContextDefaultValues: CurrencyContextType = {
  currency: {
    value: "USD",
    label: "USD",
    icon: IconsEnum.usa,
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
  const [currency, setCurrency] = useState<CurrencyContextType["currency"]>(
    currencyOptions[0]
  );

  const changeCurrency = (info: CurrencyContextType["currency"]) => {
    setCurrency(info);
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
