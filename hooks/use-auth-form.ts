import Router from "next/router";
import { useEffect, useState } from "react";
import { LoginModel, RegisterModel } from "../types/auth";
import { FormErrorMap, FormValidationMap } from "../types/form";

export const useAuthForm = <T extends LoginModel | RegisterModel>(
  initialValue: T,
  formValidationRules: FormValidationMap
) => {
  const [value, setValue] = useState<T>(initialValue);
  const [formError, setFormError] = useState<FormErrorMap>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const validateProperty = (key: string) =>
    !formValidationRules[key].required || value[key as keyof T];

  const validateForm = () => {
    let formInvalid = false;

    const errors: FormErrorMap = {};
    for (let key in formValidationRules) {
      const invalid = !validateProperty(key);
      errors[key] = invalid;
      formInvalid ||= invalid;
    }

    setFormError(errors);

    return formInvalid;
  };

  useEffect(() => {
    if (submitted) validateForm();
  }, [value]);

  const fieldHasError = (key: string) => formError[key];
  const hasAnyError = () => Object.values(formError).some((e) => e);

  const onSubmit = async (callback: () => Promise<any>) => {
    if (loading) return;

    setSubmitted(true);
    const invalid = validateForm();

    if (invalid) {
      return;
    }

    setLoading(true);
    await callback();
    setLoading(false);
    Router.push("/panel?loggedIn=1");
  };

  return {
    value,
    formError,
    loading,
    getFieldValue,
    handleOnChange,
    validateForm,
    fieldHasError,
    hasAnyError,
    onSubmit,
  };
};
