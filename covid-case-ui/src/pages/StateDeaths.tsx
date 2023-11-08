import React, { useState } from "react";
import { components } from "../generated/schema";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { createAxiosClient } from "../utils";
import StateTile from "../components/layout/StateTile/StateTile";

const StateDeaths = ({
  shouldShowLatest,
  range,
}: {
  shouldShowLatest: boolean;
  range: number;
}) => {
  const { state } = useParams();
  const [cases, setCases] = useState<components["schemas"]["StateDeathsDTO"]>();
  const [latest, setlatest] =
    useState<components["schemas"]["LatestStateDeathsDTO"]>();

  useQuery({
    queryKey: [`${state}-cases`],
    queryFn: async () => {
      const axios = createAxiosClient();
      const { data } = await axios.get<components["schemas"]["StateDeathsDTO"]>(
        `/api/deaths/germany/${state}`
      );
      setCases(data);
    },
  });

  useQuery({
    queryKey: [`latest-${state}-deaths-${range}`],
    queryFn: async () => {
      const axios = createAxiosClient();
      const { data } = await axios.get<
        components["schemas"]["LatestStateDeathsDTO"]
      >(`/api/deaths/germany/${state}/latest/${range}`);
      setlatest(data);
    },
  });

  return (
    <>
      {shouldShowLatest && latest && state ? (
        <StateTile
          path="deaths"
          data={{ variant: "state-deaths-latest", stateData: latest }}
          stateName={state}
        />
      ) : cases && state ? (
        <StateTile
          path="deaths"
          data={{ variant: "state-deaths", stateData: cases }}
          stateName={state}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default StateDeaths;
