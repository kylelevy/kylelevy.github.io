import { TablerIconsProps } from "@tabler/icons-react";

export type Navlink = {
  href: string;
  label: string;
  icon: (props: TablerIconsProps) => JSX.Element;
};
