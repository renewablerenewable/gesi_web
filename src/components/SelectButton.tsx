import React, { FC } from 'react';

export interface SelectButtonProps {
  text: string;
  selected: boolean;
  className?: string;
  onClick: () => void;
}

export const SelectButton: FC<SelectButtonProps> = ({
  text,
  selected,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 h-10 ${className} text-14 ${
        selected
          ? 'font-bold border-2 border-black text-black'
          : 'text-gray-400 border border-gray-200'
      }`}
    >
      {text}
    </button>
  );
};
