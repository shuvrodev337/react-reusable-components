import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
// clsx is utility for constructing className strings conditionally.
const cn = (...inputs: ClassValue[]) => {
  // this function takes an input of array of classes, wraps them in clsx and twMerge
  //   console.log(inputs); // example input ['btn-solid', 'w-full'], clsx can take an array of strings/object
  return twMerge(clsx(inputs));
};

export default cn;
