import { Dialog } from "@headlessui/react";
import React from "react";

import { Nav } from "../components/nav";
import { useLocale } from "../hooks/useLocale";

interface SidebarLayoutProps {
  navIsOpen: boolean;
  setNavIsOpen: (isNavOpen: boolean) => void;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  navIsOpen,
  setNavIsOpen,
  children,
}) => {
  const { nav } = useLocale();
  return (
    <div className="flex grow">
      <div className="fixed inset-0 z-10 hidden w-72 overflow-y-auto bg-light-30 pt-12 dark:bg-dark-50 lg:block">
        <Nav nav={nav} setNavIsOpen={setNavIsOpen} />
      </div>
      <div className="w-full p-4 lg:p-8 lg:pl-80">{children}</div>
      <Dialog
        as="div"
        open={navIsOpen}
        unmount={false}
        onClose={() => setNavIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto lg:hidden"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-dark-50/80" />
        <div className="fixed inset-0 w-72 overflow-y-auto bg-light-30 px-4 pt-2 dark:bg-dark-50 lg:block">
          <Nav nav={nav} setNavIsOpen={setNavIsOpen} />
        </div>
      </Dialog>
    </div>
  );
};

export default SidebarLayout;
