import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classNames from "classnames";
import "./Button.scss";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  isDisabled,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames("Button", className, {
        Button__disabled: isDisabled,
      })}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
