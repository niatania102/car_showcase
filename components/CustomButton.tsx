"use client";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick, btnType
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`} // ${containerStyles} is an additional dynamic style
      onClick={handleClick}
    > 
      {/* {`flex-1`} is an example of template string because later we can pass additional style*/}
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
