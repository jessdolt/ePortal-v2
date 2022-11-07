import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleHandler = (newValue) => {
    setValue((currentValue) =>
      typeof newValue === "boolean" ? newValue : !currentValue
    );
  };

  return [value, toggleHandler];
};

export default useToggle;
