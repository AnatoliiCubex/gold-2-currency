import { useState } from "react";
import Select, { SingleValue, ActionMeta, components } from "react-select";

import styles from "./Select.module.scss";
import { currencyOptions } from "./constants";
import { SvgIcon } from "../SvgIcon";

type SelectOptionType = { label: string; value: string } | null;

export const SelectComponent: React.FC<{ id: string }> = ({ id }) => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(null);

  const handleChange = (
    newValue: SingleValue<SelectOptionType>,
    actionMeta: ActionMeta<SelectOptionType>
  ) => {
    console.log(newValue, actionMeta);
    setSelectedOption(newValue);
  };

  const { Option } = components;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconOption = (props: any) => (
    <Option {...props}>
      {props.data.icon && <SvgIcon src={props.data.icon} size={24} />}
      {props.data.label}
    </Option>
  );

  return (
    <Select
      instanceId={id}
      className={styles.select + " myTransition"}
      classNamePrefix={"react-select"}
      options={currencyOptions}
      value={selectedOption}
      onChange={handleChange}
      isSearchable={false}
      menuIsOpen
      components={{
        IndicatorSeparator: () => null,
        Menu: (props) => <components.Menu {...props} className={styles.menu} />,
        Option: IconOption,
      }}
    />
  );
};

SelectComponent.displayName = "Select";
