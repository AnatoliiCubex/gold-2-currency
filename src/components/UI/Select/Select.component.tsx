import { useState } from "react";
import Select, {
  SingleValue,
  // ActionMeta,
  components,
} from "react-select";

import { IconsEnum, SvgIcon } from "../SvgIcon";
import { FontWeightEnum, Text, TextSizeEnum } from "../Text";

// import { currencyOptions } from "./constants";
import styles from "./Select.module.scss";
import classNames from "classnames";

type SelectOptionType = { label: string; value: string } | null;
type Props = {
  id: string;
  options: {
    value: string;
    label: string;
    icon?: IconsEnum;
  }[];
  className?: string;
};

export const SelectComponent: React.FC<Props> = ({
  id,
  options,
  className,
}) => {
  const { Option, SingleValue } = components;
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    options[0]
  );

  const selectClassName = classNames(styles.select, " myTransition", className);
  const handleChange = (
    newValue: SingleValue<SelectOptionType>
    // actionMeta: ActionMeta<SelectOptionType>
  ) => {
    setSelectedOption(newValue);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconOption = (props: any) => (
    <Option {...props}>
      {props.data.icon && <SvgIcon src={props.data.icon} size={16} />}
      <Text size={TextSizeEnum.S14} fontWeight={FontWeightEnum.FW600}>
        {props.data.label}
      </Text>
    </Option>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SingleValueOption = (props: any) => (
    <SingleValue {...props}>
      {props.data.icon && <SvgIcon src={props.data.icon} size={16} />}
      <Text size={TextSizeEnum.S14} fontWeight={FontWeightEnum.FW600}>
        {props.data.label}
      </Text>
    </SingleValue>
  );

  return (
    <Select
      instanceId={id}
      className={selectClassName}
      classNamePrefix={"react-select"}
      options={options}
      value={selectedOption}
      onChange={handleChange}
      isSearchable={false}
      components={{
        IndicatorSeparator: () => null,
        Menu: (props) => <components.Menu {...props} className={styles.menu} />,
        Option: IconOption,
        SingleValue: SingleValueOption,
      }}
    />
  );
};

SelectComponent.displayName = "Select";
