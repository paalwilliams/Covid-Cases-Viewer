import React, { useState } from "react";
import { createAxiosClient } from "../utils";
import { useQuery } from "react-query";
import { components } from "../generated/schema";
import { Outlet } from "react-router-dom";
import StateTile from "../components/layout/StateTile/StateTile";
import styles from "./Deaths.module.css";

const Deaths = ({
  shouldShowLatest,
  range,
}: {
  shouldShowLatest: boolean;
  range: number;
}) => {
  let [data, setData] = useState<components["schemas"]["GermanyDeathsDTO"]>();
  let [latest, setLatest] =
    useState<components["schemas"]["LatestGermanyDeathsDTO"]>();

  useQuery({
    queryKey: ["deaths"],
    queryFn: async () => {
      const axios = createAxiosClient();
      const { data } = await axios.get<
        components["schemas"]["GermanyDeathsDTO"]
      >("/api/deaths/germany");
      setData(data);
    },
  });

  useQuery({
    queryKey: [range],
    queryFn: async () => {
      const axios = createAxiosClient();
      const { data } = await axios.get<
        components["schemas"]["LatestGermanyDeathsDTO"]
      >(`/api/deaths/germany/latest/${range}`);
      setLatest(data);
    },
  });

  return (
    <>
      <Outlet />
      <div className={styles.gridContainer}>
        {!shouldShowLatest && data
          ? Object.entries(data).map(([stateName, stateData]) => {
              return (
                <StateTile
                  path="deaths"
                  key={stateName}
                  stateName={stateName}
                  data={{ variant: "deaths", stateData }}
                />
              );
            })
          : latest
          ? Object.entries(latest).map(([stateName, stateData]) => {
              return (
                <StateTile
                  path="deaths"
                  key={stateName}
                  stateName={stateName}
                  data={{ variant: "state-deaths-latest", stateData }}
                />
              );
            })
          : ""}
      </div>
    </>
  );
};

export default Deaths;
