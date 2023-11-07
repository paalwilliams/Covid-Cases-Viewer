import { components } from "../../../generated/schema";
import CaseStateTile from "./CaseStateTile";
import DeathStateTile from "./DeathStateTile";
import styles from "./StateTile.module.css";

const StateTile = ({
  data,
  stateName,
}: {
  stateName: string;
  data:
    | { variant: "deaths"; stateData: components["schemas"]["StateDeathsDTO"] }
    | { variant: "cases"; stateData: components["schemas"]["StateCasesDto"] };
}) => {
  return (
    <div className={styles.stateTile}>
      {data.variant === "cases" ? (
        <CaseStateTile data={data.stateData} />
      ) : (
        <DeathStateTile data={data.stateData} />
      )}
    </div>
  );
};

export default StateTile;
