import { FC, useRef, useState } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import "./Sidebar.scss";
import { IconButton } from "components";

export interface ISidebarProps {
  children?: React.ReactNode;
  active?: boolean;
}

export const Sidebar: FC<ISidebarProps> = ({ children, active = false }) => {
  const [isOpen, setIsOpen] = useState(active);
  const nodeRef = useRef(null);

  const handleClick = (event: React.MouseEvent) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={classNames("Sidebar", {
        Sidebar_active: isOpen,
      })}
    >
      <IconButton
        iconType="Arrows"
        onClick={handleClick}
        className={classNames("Sidebar-IconButton", {
          "Sidebar-IconButton_active": isOpen,
        })}
      />
      <CSSTransition
        timeout={300}
        nodeRef={nodeRef}
        in={isOpen}
        classNames="SidebarContainer"
        unmountOnExit
      >
        <div className="SidebarContainer" ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
