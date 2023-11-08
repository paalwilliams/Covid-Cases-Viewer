import { Link } from "react-router-dom";
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
    | { variant: "cases"; stateData: components["schemas"]["StateCasesDto"] }
    | {
        variant: "cases-latest";
        stateData: components["schemas"]["LatestGermanyCasesDTO"];
      }
    | {
        variant: "deaths-latest";
        stateData: components["schemas"]["LatestGermanyDeathsDTO"];
      };
}) => {
  return (
    <div className={styles.stateTile}>
      {data.variant === "cases" ? (
        <CaseStateTile data={data.stateData} />
      ) : data.variant === "deaths" ? (
        <DeathStateTile data={data.stateData} />
      ) : data.variant === "cases-latest" ? (
        ""
      ) : data.variant === "deaths-latest" ? (
        ""
      ) : (
        ""
      )}
    </div>
  );
};

export default StateTile;
