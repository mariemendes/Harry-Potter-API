import {type ReactNode} from 'react';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
};

function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
     {children}
    </button>
  );
}

export default Button;