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
    <>
      <div className="fixed inset-0 hidden w-64 overflow-y-auto bg-gray-100 pt-12 dark:bg-dark-5 lg:block">
        <Nav nav={nav} setNavIsOpen={setNavIsOpen} />
      </div>
      <div className="px-2 pt-4 lg:px-8 lg:pt-8 lg:pl-72 lg:pr-8">
        {children}
      </div>
      <Dialog
        as="div"
        open={navIsOpen}
        unmount={false}
        onClose={() => setNavIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto lg:hidden"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-dark-5/80" />
        <div className="fixed inset-0 w-64 overflow-y-auto bg-gray-100 px-4 pt-2 dark:bg-dark-5 lg:block">
          <Nav nav={nav} setNavIsOpen={setNavIsOpen} />
        </div>
      </Dialog>
    </>
  );
};

export default SidebarLayout;
