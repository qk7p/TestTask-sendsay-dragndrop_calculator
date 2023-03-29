import classNames from "classnames";
import Icon from "components/Icon";
import { IconType, iconTypes } from "components/Icon/IconType";
import React, { useState } from "react";
import { newGuid } from "utils/guid";
import { IModeItemProps, ModeItem } from "./ModeItem/ModeItem";
import "./ModeSwitcher.scss";

export interface IModeSwitcherProps {
  items?: ModeItem[];
  onChange?: (item: ModeItem) => void;
}

export const ModeSwitcher: React.FC<IModeSwitcherProps> = ({
  items = [],
  onChange,
}) => {
  const [data, setData] = useState<ModeItem[]>(items);

  const handleClick = (index: number) => {
    const tempArray = [...data];
    tempArray.forEach((element) => (element.isSelected = false));
    tempArray[index].isSelected = true;
    setData(tempArray);
    onChange?.(data[index]);
  };

  return (
    <div className="ModeSwitcher">
      {data &&
        data.map((item: ModeItem, index) => (
          <ModeItem
            iconType={item.iconType}
            value={item.value}
            index={index}
            isSelected={item.isSelected}
            onClick={handleClick}
            key={newGuid()}
          />
        ))}
    </div>
  );
};
