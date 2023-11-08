import React from "react";
import { components } from "../../../generated/schema";

const LatestStateCasesTile = ({
  data,
}: {
  data: components["schemas"]["LatestStateDeathsDTO"];
}) => {
  return (
    <div>
      <p>State: {data.stateName}</p>

      {data.history
        ? data.history.map((value) => {
            return (
              <>
                <p>Date: {new Date(value.date).toDateString()}</p>
                <p>Cases: {value.deaths}</p>
              </>
            );
          })
        : ""}
    </div>
  );
};

export default LatestStateCasesTile;
