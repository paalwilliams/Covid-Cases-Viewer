import React from "react";
import { components } from "../../../generated/schema";

const DeathsLatestTile = ({
  data,
}: {
  data: components["schemas"]["LatestGermanyDeathsDTO"];
}) => {
  return (
    <div>
      <p>State: {data["Baden-Württemberg"].abbreviation}</p>
      <p>Death Total: {data["Baden-Württemberg"].history}</p>
      <p>Population: {data["Baden-Württemberg"].dayRange}</p>
    </div>
  );
};

export default DeathsLatestTile;
