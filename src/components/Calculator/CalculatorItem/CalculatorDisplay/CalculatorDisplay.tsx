import { FC } from "react";
import classNames from "classnames";
import "./CalculatorDisplay.scss";
import { CalculatorItem, ICalculatorItemProps } from "../CalculatorItem";

export interface ICalculatorDisplayProps {
  value?: number;
  className?: string;
}

export const CalculatorDisplay: FC<ICalculatorDisplayProps> = ({
  value = 0,
  className,
}) => {
  return (
    <div className={classNames("CalculatorDisplay", className)}>
      <div className="CalculatorDisplay-ValueContainer">
        <p className="CalculatorDisplay-Value">{value}</p>
      </div>
    </div>
  );
};
