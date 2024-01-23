import { useContext } from "react";
import Button from "../ui/Button";
import { ReusableFormContext } from ".";
import cn from "../../utils/cn";

export const FormSubmit = () => {
  const { double } = useContext(ReusableFormContext) as { double?: boolean };
  // const double: boolean = false;

  return (
    <div
      className={cn("grid grid-cols-1 justify-items-center gap-4 rounded-md ", {
        "md:grid-cols-2 ": double,
      })}
    >
      <div className=" max-w-md w-full flex justify-end col-start-1 md:col-start-2">
        <Button type="submit" className={"w-full md:w-fit"}>
          Submit
        </Button>
      </div>
    </div>
  );
};
