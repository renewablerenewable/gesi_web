import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Info } from '../assets/svg/info.svg';

interface LabelButtonProps {
  to: string;
  label: string;
}

export const LabelButton: React.FC<LabelButtonProps> = ({ to, label }) => {
  const { push } = useHistory();
  return (
    <div className="px-6 bg-gray-100 text-gray-800 flex items-center space-x-3 mr-2">
      <h3>{label}</h3>
      <Info className="cursor-pointer" onClick={() => push(to)} />
    </div>
  );
};
