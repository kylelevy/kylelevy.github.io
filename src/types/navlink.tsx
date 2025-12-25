import { ForwardRefExoticComponent, RefAttributes } from "react";
import { TablerIconsProps } from "@tabler/icons-react";

export type Navlink = {
  href: string;
  label: string;
  icon: ForwardRefExoticComponent<TablerIconsProps & RefAttributes<SVGSVGElement>>;
};
