import cn from "../../utils/cn";

const Button = ({ children, className, variant }) => {
  const getVariant = (variant) => {
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
    <button className={cn(getVariant(variant), className)}>{children}</button>
  );
};

export default Button;
