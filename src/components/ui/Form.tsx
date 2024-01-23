import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "./Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TNormalFormType, formSchema } from "./formValidate";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNormalFormType>({ resolver: zodResolver(formSchema) });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const doubleColumn: boolean = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("max-w-md mx-auto p-6 rounded-md ", {
        "max-w-5xl": doubleColumn,
        "max-w-md": !doubleColumn,
      })}
    >
      <div
        className={cn(
          "grid grid-cols-1 justify-items-center gap-4 p-4 rounded-md ",
          {
            "md:grid-cols-2": doubleColumn,
            // doubleColumn jodi true hoy, medium device theke 2 column & small device a 1 collumn
            // doubleColumn jodi false hoy, sob device a 1 collumn.
          }
        )}
      >
        <div className="w-full max-w-md">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && (
            <span className="text-xs text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-xs text-red-600">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="w-full max-w-md">
          <label htmlFor="gender" className="block">
            Gender
          </label>
          <select id="gender" {...register("gender")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <span className="text-xs text-red-600">
              {errors.gender.message}
            </span>
          )}
        </div>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 justify-items-center gap-4 rounded-md ",
          {
            "md:grid-cols-2 ": doubleColumn,
          }
        )}
      >
        <div className=" max-w-md w-full flex justify-end col-start-1 md:col-start-2">
          <Button className={"w-full md:w-fit"}>Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
