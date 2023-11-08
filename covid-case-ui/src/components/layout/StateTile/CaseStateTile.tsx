import { components } from "../../../generated/schema";

const CaseStateTile = ({
  data,
}: {
  data: components["schemas"]["StateCasesDto"];
}) => {
  return (
    <div>
      <p>{data.stateName}</p>
      <p>Total Cases: {data.cases}</p>
      <p>Cases Per 100k: {data.casesPer100k}</p>
      <p>Population {data.population}</p>
    </div>
  );
};

export default CaseStateTile;
