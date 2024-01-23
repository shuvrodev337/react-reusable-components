import { ReactNode, useContext } from "react";
import { ReusableFormContext } from ".";
import cn from "../../utils/cn";

export const FormSection = ({ children }: { children: ReactNode }) => {
  const { double } = useContext(ReusableFormContext) as { double?: boolean };
  return (
    <div
      className={cn(
        "grid grid-cols-1 justify-items-center gap-4 p-4 rounded-md ",
        {
          "md:grid-cols-2": double,
        }
      )}
    >
      {children}
    </div>
  );
};
