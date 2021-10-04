import React from 'react';
import { Button } from 'react-bootstrap';

interface IPrimaryButtonProps {
  onClick: () => void;
  text: string;
  size: 'lg' | 'sm' | undefined;
  color: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  onClick,
  text,
  color,
  size,
  disabled,
}) => {
  return (
    <Button color={color} size={size} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
