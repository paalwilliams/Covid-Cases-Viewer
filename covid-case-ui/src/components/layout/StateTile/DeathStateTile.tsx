import React from "react";
import { components } from "../../../generated/schema";

const DeathStateTile = ({
  data,
}: {
  data: components["schemas"]["StateDeathsDTO"];
}) => {
  return (
    <div>
      <p>State: {data.stateName}</p>
      <p>Death Total: {data.deaths}</p>
      <p>Population: {data.population}</p>
    </div>
  );
};

export default DeathStateTile;
