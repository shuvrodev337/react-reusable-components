import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement; // ref er type

type TVariant = "solid" | "outline" | "ghost";

type TButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  // button er react given type, jekhane normal attributes gulor type define kora thake.
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions; // extra jinish er type add jamon variant

const Button = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", children, ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "ghost":
          return "btn-ghost";
        case "outline":
          return "btn-outline";
        default:
          return "btn-solid";
      }
    };
    return (
      <button
        ref={ref}
        {...rest} // onclick/onBlur etc. event handler, as it is set hoye jabe. className k alada korar reason= cn e pass kora hocche.
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
