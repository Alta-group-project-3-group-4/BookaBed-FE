import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({ id, label, loading, ...props }) => {
  return (
    <button
      id={id}
      disabled={loading}
      className={`rounded-xl lg:w-6/12 md:w-6/12 sm:w-6/12 bg-[#0E8388] px-6 py-2 text-[16px] font-medium capitalize tracking-wider text-white disabled:cursor-not-allowed disabled:bg-zinc-400 ${
        loading && "cursor-not-allowed bg-zinc-400 text-zinc-800"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
