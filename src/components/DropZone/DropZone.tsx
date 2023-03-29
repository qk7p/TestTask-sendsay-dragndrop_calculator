import classNames from "classnames";
import {
  CalculatorItem,
  ICalculatorItemProps,
} from "components/Calculator/CalculatorItem/CalculatorItem";
import Icon from "components/Icon";
import { ModeType } from "components/types/ModeType";
import React, { useEffect, useState } from "react";
import { newGuid } from "utils/guid";
import "./DropZone.scss";

export interface IDropZone {
  className?: string;
  currentMode: ModeType;
  calculatorItems: ICalculatorItemProps[];
  setCalculatorItems: React.Dispatch<
    React.SetStateAction<ICalculatorItemProps[]>
  >;
}

export const DropZone: React.FC<IDropZone> = ({
  currentMode,
  className,
  calculatorItems,
  setCalculatorItems,
}) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const [hasMoved, setHasMoved] = useState(false);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text/plain");
    const tempArray = [...calculatorItems];
    const index = tempArray.findIndex((element) => element.elementId === id);
    tempArray[index].moved = true;
    setCalculatorItems(tempArray);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text/plain");
  };

  useEffect(() => {
    calculatorItems.some((element) => element.moved === true)
      ? setHasMoved(true)
      : setHasMoved(false);
  }, [calculatorItems]);

  return (
    <div
      className={classNames("DropZone", className, {
        DropZone_entered: hasMoved,
      })}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {hasMoved ? (
        calculatorItems.map(
          (element) =>
            element.moved && (
              <CalculatorItem
                elementId={element.elementId}
                key={newGuid()}
                className={
                  currentMode === "Constructor"
                    ? "CalculatorItem_child_locked"
                    : ""
                }
              >
                {element.children}
              </CalculatorItem>
            )
        )
      ) : (
        <>
          <Icon type={"AddImage"} className={"DropZone-Icon"} />
          <p className={"DropZone-MainText"}>Перетащите сюда</p>
          <p className={"DropZone-SubText"}>
            любой элемент
            <br /> из левой панели
          </p>
        </>
      )}
    </div>
  );
};
