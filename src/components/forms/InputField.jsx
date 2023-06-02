/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-restricted-syntax */
import React, { forwardRef } from "react";

const InputField = forwardRef(({ parentClassName, ...props }, ref) => {
  return (
    <div className={`h-[80px] ${parentClassName}`}>
      <label htmlFor={props.name} className={`${props.styles} sr-only"`}>
        {props.label}
      </label>
      <div className='w-full'>
        <input
          ref={ref}
          type={props.type}
          placeholder={props.placeholder}
          className={`w-full ${props.className}`}
          onChange={props.onChange}
          {...props}
        />
        {props.error && (
          <p className='text-rose-400 text-xs' id={`${props.name}-error`}>
            {props.error?.message.split(',')[0]}
          </p>
        )}
      </div>
    </div>
  );
});

export default InputField;
