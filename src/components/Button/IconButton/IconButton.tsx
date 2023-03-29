import React from "react";
import classNames from "classnames";
import "./IconButton.scss";
import { Button, IButtonProps } from "../Button";
import Icon from "../../Icon";
import { IconType } from "../../Icon/IconType";

export interface IIconButtonProps extends IButtonProps {
  className?: string;
  iconType: IconType;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  className,
  iconType,
  isDisabled,
  onClick,
  ...rest
}) => {
  return (
    <Button
      className={classNames("IconButton", className)}
      isDisabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      <Icon type={iconType} />
    </Button>
  );
};
