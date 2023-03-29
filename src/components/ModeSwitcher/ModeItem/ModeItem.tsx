import { FC } from "react";
import classNames from "classnames";
import "./ModeItem.scss";
import { IconType } from "components/Icon/IconType";
import { Icon } from "components";

export type ModeItem = {
  iconType?: IconType;
  value: string;
  isSelected?: boolean;
};

export interface IModeItemProps {
  iconType?: IconType;
  value: string;
  isSelected?: boolean;
  index: number;
  onClick: (index: number) => void;
  className?: string;
}

export const ModeItem: FC<IModeItemProps> = ({
  iconType,
  value,
  isSelected = false,
  index,
  onClick,
  className,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    onClick(index);
  };

  return (
    <div
      className={classNames("ModeItem", className, {
        ModeItem_active: isSelected,
      })}
      onClick={handleClick}
    >
      {iconType && <Icon type={iconType} className="ModeItem-Icon" />}
      {value && <span>{value}</span>}
    </div>
  );
};
