import classNames from "classnames";
import Select, { SingleValue, components } from "react-select";

import { IconsEnum, SvgIcon } from "../SvgIcon";
import { FontWeightEnum, Text, TextSizeEnum } from "../Text";

import styles from "./Select.module.scss";

type SelectOptionType = {
  label: string;
  value: string;
  icon?: IconsEnum;
  exchange: number;
} | null;

type Props = {
  id: string;
  value: SingleValue<SelectOptionType>;
  options: {
    value: string;
    label: string;
    icon?: IconsEnum;
    exchange: number;
  }[];
  setOptions: (newValue: SingleValue<SelectOptionType>) => void;
  className?: string;
};

export const SelectComponent: React.FC<Props> = ({
  id,
  options,
  value,
  setOptions,
  className,
}) => {
  const { Option, SingleValue } = components;

  const selectClassName = classNames(styles.select, " myTransition", className);
  const handleChange = (newValue: SingleValue<SelectOptionType>) => {
    setOptions(newValue);
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
      value={value}
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
