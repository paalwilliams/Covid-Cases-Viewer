import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { createAxiosClient } from "../utils";
import { components } from "../generated/schema";
import StateTile from "../components/layout/StateTile/StateTile";

const StateCases = ({
  shouldShowLatest,
  range,
}: {
  shouldShowLatest: boolean;
  range: number;
}) => {
  const { state } = useParams();
  const [cases, setCases] = useState<components["schemas"]["StateCasesDto"]>();
  const [latest, setLatest] =
    useState<components["schemas"]["LatestStateCasesDTO"]>();

  useQuery({
    queryKey: [`${state}-cases`],
    queryFn: async () => {
      const axios = createAxiosClient();
      const { data } = await axios.get<components["schemas"]["StateCasesDto"]>(
        `/api/cases/germany/${state}`
      );
      setCases(data);
    },
  });

  useQuery({
    queryKey: [`latest-${state}-cases-${range}`],
    queryFn: async () => {
      const axios = createAxiosClient();
      const { data } = await axios.get<
        components["schemas"]["LatestStateCasesDTO"]
      >(`/api/cases/germany/latest/${state}/${range}`);
      setLatest(data);
    },
  });

  return (
    <div>
      {!shouldShowLatest && cases && state ? (
        <StateTile
          path="cases"
          data={{ variant: "state-cases", stateData: cases }}
          stateName={state}
        />
      ) : latest && state ? (
        <StateTile
          path="cases"
          data={{ variant: "state-cases-latest", stateData: latest }}
          stateName={state}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default StateCases;
