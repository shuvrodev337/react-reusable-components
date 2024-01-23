import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TReusableFormTypes = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  double?: boolean;
};
