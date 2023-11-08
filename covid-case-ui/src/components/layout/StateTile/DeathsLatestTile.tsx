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
      {data["Baden-Württemberg"].history.map((data) => {
        return (
          <>
            <p>{data.date}</p>
            <p>{data.deaths}</p>
          </>
        );
      })}
      <p>Population: {data["Baden-Württemberg"].dayRange}</p>
    </div>
  );
};

export default DeathsLatestTile;
