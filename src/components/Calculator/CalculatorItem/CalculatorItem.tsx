import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import classNames from "classnames";
import "./CalculatorItem.scss";
import { ModeType } from "components/types/ModeType";
import { newGuid } from "utils/guid";

export interface ICalculatorItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  draggable?: boolean;
  moved?: boolean;
  elementId: string;
}

export const CalculatorItem: FC<ICalculatorItemProps> = ({
  className,
  children,
  draggable = true,
  moved = false,
  elementId,
  ...rest
}) => {
  const [isItemDragged, setIsItemDragged] = useState(false);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    elementId: string | undefined
  ) => {
    if (elementId) {
      event.dataTransfer.setData("text/plain", elementId);
      setIsItemDragged(true);
      event.stopPropagation();
    }
  };

  return (
    <div
      className={classNames("CalculatorItem", className, {
        CalculatorItem_child_locked: isItemDragged,
      })}
      draggable={draggable}
      onDragStart={(event) => handleDragStart(event, elementId)}
      {...rest}
    >
      {children}
    </div>
  );
};
