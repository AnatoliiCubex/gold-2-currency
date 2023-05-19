import { useState } from "react";
import Select, { SingleValue, ActionMeta, components } from "react-select";

import styles from "./Select.module.scss";

type SelectOptionType = { label: string; value: string } | null;

export const SelectComponent: React.FC<{ id: string }> = ({ id }) => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (
    newValue: SingleValue<SelectOptionType>,
    actionMeta: ActionMeta<SelectOptionType>
  ) => {
    console.log(newValue, actionMeta);
    setSelectedOption(newValue);
  };

  return (
    <Select
      instanceId={id}
      className={styles.select}
      options={options}
      value={selectedOption}
      onChange={handleChange}
      isSearchable={false}
      components={{
        IndicatorSeparator: () => null,
        Menu: (props) => <components.Menu {...props} className={styles.menu} />,
      }}
      onMenuOpen={() => null}
      onMenuClose={() => null}
      styles={{
        menu: (base) => ({
          ...base,
          marginTop: 0,
          padding: "14px 0px",
          width: "100px",
          minWidth: "100%",
          backgroundColor: "var(--dark)",
        }),
        option: (styles) => {
          return {
            ...styles,
            backgroundColor: "transparent",
            color: "#FFF",
            cursor: "pointer",
            "&:hover": {
              background: "rgba(44, 62, 103, 0.2)",
              borderRight: "2px solid #E9B109",
              color: "var(--yellow)",
            },
          };
        },
      }}
    />
  );
};

SelectComponent.displayName = "Select";
