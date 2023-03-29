import { ReactComponent as Runtime } from "assets/icons/Runtime.svg";
import { ReactComponent as Constructor } from "assets/icons/Constructor.svg";
import { ReactComponent as AddImage } from "assets/icons/AddImage.svg";
import { ReactComponent as Arrows } from "assets/icons/Arrows.svg";
import { newGuid } from "../../utils/guid";

export type IconType = "Runtime" | "Constructor" | "AddImage" | "Arrows";

export const iconTypes = new Map([
  ["Runtime", <Runtime key={newGuid()} />],
  ["Constructor", <Constructor key={newGuid()} />],
  ["AddImage", <AddImage key={newGuid()} />],
  ["Arrows", <Arrows key={newGuid()} />],
]);
