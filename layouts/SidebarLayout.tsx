import { Dialog } from "@headlessui/react";
import React from "react";

import Nav from "../components/Nav";
import { nav } from "../data/nav";

interface SidebarLayoutProps {
  navIsOpen: boolean;
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  navIsOpen,
  setNavIsOpen,
  children,
}) => {
  return (
    <div className="mx-auto px-4">
      <div className="fixed inset-0 hidden w-64 overflow-y-auto bg-gray-50 px-4 pt-10 dark:bg-black lg:block">
        <Nav nav={nav} setNavIsOpen={setNavIsOpen} />
      </div>
      <div className="h-full pt-4 lg:pl-64">{children}</div>
      <Dialog
        as="div"
        open={navIsOpen}
        onClose={() => setNavIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto lg:hidden"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        <div className="fixed inset-0 w-64 overflow-y-auto bg-gray-50 px-4 pt-2 dark:bg-black lg:block">
          <Nav nav={nav} setNavIsOpen={setNavIsOpen} />
        </div>
      </Dialog>
    </div>
  );
};

export default SidebarLayout;
