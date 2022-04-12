import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

export interface TabProps {
  text: string;
  to: string;
  selected: boolean;
  className?: string;
}

export const Tab: FC<TabProps> = ({ text, to, selected, className }) => {
  const { push } = useHistory();
  return (
    <button
      onClick={() => push(to)}
      className={`px-0.5 py-2 ${className} text-15 ${
        selected
          ? 'font-bold border-b-2 border-black text-black'
          : 'text-gray-500'
      }`}
    >
      {text}
    </button>
  );
};
