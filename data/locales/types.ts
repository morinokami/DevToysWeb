import { IconProps } from "../icon";

export type Nav = NavCategory[];

export type NavCategory = {
  title: string;
  href: string;
  // TODO: update
  icon?: React.VFC;
  items?: NavItem[];
};

export type NavItem = {
  title: string;
  longTitle: string;
  href: string;
  // TODO: update
  icon?: React.VFC<IconProps>;
  desc: string;
};
