import { FC } from "react";
import classNames from "classnames";
import "./CalculatorOperands.scss";
import Button from "components/Button";
import { CalculatorItem, ICalculatorItemProps } from "../CalculatorItem";

export interface ICalculatorOperandsProps {
  className?: string;
}

export const CalculatorOperands: FC<ICalculatorOperandsProps> = ({
  className,
}) => {
  return (
    <div className={classNames("CalculatorOperands", className)}>
      <Button className={"CalculatorOperands-Button"}>7</Button>
      <Button className={"CalculatorOperands-Button"}>8</Button>
      <Button className={"CalculatorOperands-Button"}>9</Button>
      <Button className={"CalculatorOperands-Button"}>4</Button>
      <Button className={"CalculatorOperands-Button"}>5</Button>
      <Button className={"CalculatorOperands-Button"}>6</Button>
      <Button className={"CalculatorOperands-Button"}>1</Button>
      <Button className={"CalculatorOperands-Button"}>2</Button>
      <Button className={"CalculatorOperands-Button"}>3</Button>
      <Button
        className={classNames(
          "CalculatorOperands-Button",
          "CalculatorOperands-Button-Zero"
        )}
      >
        0
      </Button>
      <Button className={"CalculatorOperands-Button"}>,</Button>
    </div>
  );
};
