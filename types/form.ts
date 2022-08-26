export interface FormValidationRule {
  required?: boolean;
}

export interface FormValidationMap {
  [key: string]: FormValidationRule;
}

export interface FormErrorMap {
  [key: string]: boolean;
}
