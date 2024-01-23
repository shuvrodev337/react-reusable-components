import { createContext } from "react";
import cn from "../../utils/cn";
import { TReusableFormTypes } from "../../types";

export const ReusableFormContext = createContext<{ double: boolean } | null>(
  null
);

export const ReusableForm = ({
  children,
  onSubmit,
  double = false,
}: TReusableFormTypes) => {
  return (
    <ReusableFormContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn("max-w-md mx-auto p-6 rounded-md ", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        {children}
      </form>
    </ReusableFormContext.Provider>
  );
};
