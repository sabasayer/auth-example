import { useState } from "react";

export const useAuthForm = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof T
  ) => {
    setValue({
      ...value,
      [key]: event.target.value ?? "",
    });
  };

  const getFieldValue = (key: keyof T) => value[key];

  return {
    value,
    getFieldValue,
    handleOnChange,
  };
};
