import CalculatorItem from "components/Calculator/CalculatorItem";
import CalculatorCalcButton from "components/Calculator/CalculatorItem/CalculatorCalcButton";
import CalculatorDisplay from "components/Calculator/CalculatorItem/CalculatorDisplay";
import { ICalculatorItemProps } from "components/Calculator/CalculatorItem/CalculatorItem";
import CalculatorOperands from "components/Calculator/CalculatorItem/CalculatorOperands";
import CalculatorOperators from "components/Calculator/CalculatorItem/CalculatorOperators";
import { ModeType } from "components/types/ModeType";
import React from "react";
import { newGuid } from "utils/guid";
import "./DragZone.scss";

export interface IDragZoneProps {
  currentMode: ModeType;
  calculatorItems?: ICalculatorItemProps[];
}

export const DragZone: React.FC<IDragZoneProps> = ({
  currentMode,
  calculatorItems,
}) => {
  return (
    <div className="DragZone">
      {calculatorItems &&
        calculatorItems.map((element) => (
          <CalculatorItem
            elementId={element.elementId}
            key={newGuid()}
            className={element.moved ? "CalculatorItem_moved" : ""}
          >
            {element.children}
          </CalculatorItem>
        ))}
    </div>
  );
};
