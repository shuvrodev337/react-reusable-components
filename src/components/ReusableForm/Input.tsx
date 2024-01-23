import React from "react";

export const Input = ({ label, id, type, register, errors }) => {
  return (
    <div className="w-full max-w-md">
      <label htmlFor={id} className="block">
        {label}
      </label>
      <input type={type} id={id} {...register} />
      {errors[id] && (
        <span className="text-xs text-red-600">{errors[id].message}</span>
      )}
    </div>
  );
};
