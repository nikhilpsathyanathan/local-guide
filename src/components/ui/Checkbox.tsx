import type { InputHTMLAttributes } from "react";

interface CheckBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  indeterminate?: boolean;
  label?: string | React.ReactNode;
}

const CheckBox = ({
  label,
  className,
  indeterminate,
  ...props
}: CheckBoxProps) => {
  return (
    <div className="w-fit shrink-0 flex gap-4 relative items-center">
      <input
        id={props.id}
        className="peer shrink-0 appearance-none w-6 h-6 border border-1  border-gray bg-white focus:outline-none checked:border-pink rounded"
        type="checkbox"
        {...props}
      />
      <div className="absolute inset-y-[5px] left-[5px] w-[14px] h-[14px] rounded peer-checked:bg-pink  pointer-events-none"></div>
      <label htmlFor={props.id} className="font-semibold text-[14px]">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
