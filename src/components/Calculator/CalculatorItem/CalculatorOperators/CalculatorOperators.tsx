import { FC } from "react";
import classNames from "classnames";
import "./CalculatorOperators.scss";
import Button from "components/Button";
import { CalculatorItem, ICalculatorItemProps } from "../CalculatorItem";

export interface ICalculatorOperatorsProps {
  className?: string;
}

export const CalculatorOperators: FC<ICalculatorOperatorsProps> = ({
  className,
}) => {
  return (
    <div className={classNames("CalculatorOperators", className)}>
      <Button className={"CalculatorOperators-Button"}>/</Button>
      <Button className={"CalculatorOperators-Button"}>х</Button>
      <Button className={"CalculatorOperators-Button"}>-</Button>
      <Button className={"CalculatorOperators-Button"}>+</Button>
    </div>
  );
};
