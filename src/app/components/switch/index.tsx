import React from "react";

type Props = {
  checked?: boolean;
  onChange?: (e: any) => void;
};

function ToggleSwitch({ checked = false, onChange = () => null }: Props) {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={() => {
          console.log(12123123)
        }}
      />
      <label className="label">
        <span className="inner" />
        <span className="switch" />
      </label>
    </div>
  );
}

export default ToggleSwitch;
