import { DragZone, DropZone, ModeSwitcher, Sidebar } from "components";
import {
  IModeItemProps,
  ModeItem,
} from "components/ModeSwitcher/ModeItem/ModeItem";
import { ModeType } from "components/types/ModeType";
import React, { useState } from "react";
import { newGuid } from "utils/guid";
import "./Calculator.scss";
import CalculatorCalcButton from "./CalculatorItem/CalculatorCalcButton";
import CalculatorDisplay from "./CalculatorItem/CalculatorDisplay";
import { ICalculatorItemProps } from "./CalculatorItem/CalculatorItem";
import CalculatorOperands from "./CalculatorItem/CalculatorOperands";
import CalculatorOperators from "./CalculatorItem/CalculatorOperators";

const initCalculatorItems: ICalculatorItemProps[] = [
  {
    elementId: newGuid(),
    children: <CalculatorDisplay />,
  },
  {
    elementId: newGuid(),
    children: <CalculatorOperators />,
  },
  {
    elementId: newGuid(),
    children: <CalculatorOperands />,
  },
  {
    elementId: newGuid(),
    children: <CalculatorCalcButton />,
  },
];

const modeItems: ModeItem[] = [
  { iconType: "Runtime", value: "Runtime" },
  { iconType: "Constructor", value: "Constructor", isSelected: true },
];

export const Calculator: React.FC = () => {
  const [activeMode, setActiveMode] = useState<ModeType>("Constructor");

  const [calculatorItems, setCalculatorItems] = useState(initCalculatorItems);
  
  const handleChange = (item: ModeItem) => {
    setActiveMode(item.value as ModeType);
  };
  
  return (
    <div className="Calculator">
      <div className="CalculatorToggleContainer">
        <ModeSwitcher items={modeItems} onChange={handleChange} />
      </div>
      <div className="CalculatorDragContainer">
        <Sidebar>
          <DragZone
            currentMode={activeMode}
            calculatorItems={calculatorItems}
          />
        </Sidebar>
      </div>
      <div className="CalculatorDropContainer">
        <DropZone
          currentMode={activeMode}
          calculatorItems={calculatorItems}
          setCalculatorItems={setCalculatorItems}
        />
      </div>
    </div>
  );
};
