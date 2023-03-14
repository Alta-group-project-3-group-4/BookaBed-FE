import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
}

const Input = ({ id, placeholder, type, ...props }: InputProps) => {
  return (
    <input
    id={id} 
    type={type} 
    placeholder={placeholder}
    className="input input-bordered w-6/12 md:w-7/12 sm:w-4/12 h-13 md:h-12 rounded-lg bg-white text-black border-2 px-4 py-2 font-normal text-lg md:text-sm border-black"
    />
  )
};

export default Input;
