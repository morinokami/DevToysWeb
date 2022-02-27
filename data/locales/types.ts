import { IconProps } from "../icon";

export type Nav = NavCategory[];

export type NavCategory = {
  title: string;
  href: string;
  icon: React.VFC;
  items?: NavItem[];
  desc?: string;
};

export type NavItem = {
  title: string;
  longTitle: string;
  href: string;
  icon: React.VFC<IconProps>;
  desc: string;
};
