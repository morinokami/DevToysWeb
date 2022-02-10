import { Switch } from "@headlessui/react";

import Spacer from "./Spacer";

interface ToggleProps {
  on: boolean;
  onChange: (on: boolean) => void;
  desc?: string;
}

const Toggle: React.VFC<ToggleProps> = ({ on, onChange, desc }) => {
  return (
    <div className="flex items-center">
      <p className="translate-y-[2px]">{on ? "On" : "Off"}</p>
      <Spacer x={12} />
      <Switch
        checked={on}
        onChange={onChange}
        className={`${
          on ? "bg-blue-500" : "border-2 bg-dark-50"
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
      >
        <span className="sr-only">{desc}</span>
        <span
          aria-hidden="true"
          className={`${
            on ? "translate-x-7" : "translate-x-1"
          } inline-block h-3 w-3 transform rounded-full bg-white transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Toggle;
