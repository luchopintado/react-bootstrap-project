import React from 'react';

export type ButtonColor = 'red' | 'white' | 'black' | 'blue';
export type ColoredButtonProps = {
  color?: ButtonColor;
  title: string;
  onClick?(): any;
};

export default function ColoredButton({
  color = 'white',
  title,
  onClick,
}: ColoredButtonProps) {
  return (
    <button onClick={onClick} style={{ background: color, padding: '1em' }}>
      {title}
    </button>
  );
}
