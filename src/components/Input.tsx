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
    className="input input-bordered w-6/12 h-14 max-h-full rounded-lg bg-white text-black border-2 px-4 py-2 font-normal text-xl border-black"
    />
  )
};

export default Input;
