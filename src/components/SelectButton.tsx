import React, { FC } from 'react';

export interface SelectButtonProps {
  className?: string;
  disabled?: boolean;
  selected: boolean;
  text: string;
  onClick: () => void;
}

export const SelectButton: FC<SelectButtonProps> = ({
  className,
  disabled,
  selected,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 h-10 ${className} text-14 ${
        selected
          ? 'font-bold border-2 border-black text-black'
          : 'text-gray-400 border border-gray-200'
      } ${
        disabled ? 'text-gray-400 border border-gray-200 bg-gray-200' : ''
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
