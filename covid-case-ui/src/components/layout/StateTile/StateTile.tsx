import { Link } from "react-router-dom";
import { components } from "../../../generated/schema";
import CaseStateTile from "./CaseStateTile";
import DeathStateTile from "./DeathStateTile";
import styles from "./StateTile.module.css";
import LatestStateCasesTile from "./LatestStateCasesTile";
import LatestStateDeathsTile from "./LatestStateDeathsTile";

const StateTile = ({
  data,
  stateName,
  path,
}: {
  stateName: string;
  path: "cases" | "deaths";
  data:
    | { variant: "deaths"; stateData: components["schemas"]["StateDeathsDTO"] }
    | { variant: "cases"; stateData: components["schemas"]["StateCasesDto"] }
    | {
        variant: "state-cases";
        stateData: components["schemas"]["StateCasesDto"];
      }
    | {
        variant: "state-deaths";
        stateData: components["schemas"]["StateDeathsDTO"];
      }
    | {
        variant: "deaths-latest";
        stateData: components["schemas"]["LatestStateDeathsDTO"];
      }
    | {
        variant: "state-deaths-latest";
        stateData: components["schemas"]["LatestStateDeathsDTO"];
      }
    | {
        variant: "state-cases-latest";
        stateData: components["schemas"]["LatestStateCasesDTO"];
      };
}) => {
  return (
    <div className={styles.stateTile}>
      <Link to={`/${path}/${stateName.toLowerCase()}`}>
        {data.variant === "cases" ? (
          <CaseStateTile data={data.stateData} />
        ) : data.variant === "deaths" ? (
          <DeathStateTile data={data.stateData} />
        ) : data.variant === "state-cases" ? (
          <CaseStateTile data={data.stateData} />
        ) : data.variant === "state-deaths" ? (
          <DeathStateTile data={data.stateData} />
        ) : data.variant === "state-deaths-latest" ? (
          <LatestStateDeathsTile data={data.stateData} />
        ) : data.variant === "state-cases-latest" ? (
          <LatestStateCasesTile data={data.stateData} />
        ) : (
          ""
        )}
      </Link>
    </div>
  );
};

export default StateTile;
