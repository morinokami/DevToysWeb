import { Switch } from "@headlessui/react";

import Spacer from "../Spacer";

interface ToggleProps {
  on: boolean;
  onChange: (on: boolean) => void;
  desc?: string;
  onText?: string;
  offText?: string;
}

const Toggle: React.VFC<ToggleProps> = ({
  on,
  onChange,
  desc,
  onText,
  offText,
}) => {
  return (
    <div className="flex items-center">
      <p className="translate-y-px text-sm">
        {on ? onText ?? "On" : offText ?? "Off"}
      </p>
      <Spacer x={12} />
      <Switch
        checked={on}
        onChange={onChange}
        className={`${
          on
            ? "bg-blue-30"
            : "border border-dark-10 bg-light-20 dark:bg-dark-50"
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
      >
        <span className="sr-only">{desc}</span>
        <span
          aria-hidden="true"
          className={`${
            on
              ? "translate-x-7 bg-light-10 dark:bg-dark-50"
              : "translate-x-1 bg-dark-10 dark:bg-light-40"
          } inline-block h-3 w-3 transform rounded-full transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Toggle;
