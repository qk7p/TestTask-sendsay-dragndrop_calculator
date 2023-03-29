import { FC } from "react";
import classNames from "classnames";
import "./CalculatorCalcButton.scss";
import Button from "components/Button";
import { CalculatorItem, ICalculatorItemProps } from "../CalculatorItem";

export interface ICalculatorCalcButtonProps {
  className?: string;
}

export const CalculatorCalcButton: FC<ICalculatorCalcButtonProps> = ({
  className,
}) => {
  return (
    <div className={classNames("CalculatorCalcButton", className)}>
      <Button className={"CalculatorCalcButton-Button"}>=</Button>
    </div>
  );
};
