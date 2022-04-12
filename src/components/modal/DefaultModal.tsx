import { FC } from 'react';
import { Button } from '../Button';
import { ModalAnimation } from './ModalAnimation';

interface DefaultModalProps {
  title: string;
  description?: string;
  buttonText?: string;
  open: boolean;
  onClick: () => void;
  onClose: () => void;
}

export const DefaultModal: FC<DefaultModalProps> = ({
  title,
  description,
  buttonText,
  open,
  onClick,
  onClose,
}) => {
  return (
    <>
      <ModalAnimation
        open={open}
        onClose={onClose}
        className="w-full md:w-1/3 p-6"
        content={
          <div className="space-y-6 text-center">
            <h4 className="mt-4 text-center text-20 font-bold">{title}</h4>

            <p className="">{description}</p>

            <Button
              type="button"
              className="filled-gray-900 w-full"
              text={buttonText}
              onClick={onClick}
            />
          </div>
        }
      />
    </>
  );
};
