/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React from "react";
import propTypes from "prop-types";

const Button = ({ parentClassName, ...props }) => (
  <div className={parentClassName}>
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={` w-full my-2 h-[45px] rounded-md bg-[#2D719D] py-2 px-3 text-sm font-semibold text-white hover:bg-[#2198e7] ${props.className}`}
      role={props.role}
    >
      {props.label} {props.children}
    </button>
  </div>
);
Button.propTypes = {
  label: propTypes.string,
  onClick: propTypes.func,
};
Button.defaultProps = {
  label: "",
  onClick () {},
};
export default Button;
