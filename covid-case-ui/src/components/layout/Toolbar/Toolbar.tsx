import { ChangeEventHandler } from "react";

import styles from "./Toolbar.module.css";

const Toolbar = ({
  range,
  onCheckboxChange,
  onSliderChange,
  shouldShowLatest,
}: {
  range: number;
  shouldShowLatest: boolean;
  onCheckboxChange: ChangeEventHandler<HTMLInputElement>;
  onSliderChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className={styles.toolbar}>
      {shouldShowLatest ? <p>Showing results for last {range} days</p> : null}
      <input
        type="range"
        onChange={onSliderChange}
        min={1}
        max={10}
        value={range}
        disabled={!shouldShowLatest}
      />
      <label htmlFor="">
        Show Latest
        <input
          type="checkbox"
          name=""
          id=""
          checked={shouldShowLatest}
          onChange={onCheckboxChange}
        />
      </label>
    </div>
  );
};

export default Toolbar;
