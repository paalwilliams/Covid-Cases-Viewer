import React, { useState } from "react";
import { createAxiosClient } from "../utils";
import { useQuery } from "react-query";
import { components } from "../generated/schema";
import { Outlet } from "react-router-dom";
import StateTile from "../components/layout/StateTile/StateTile";
import styles from "./Deaths.module.css";
import Toolbar from "../components/layout/Toolbar/Toolbar";

const Deaths = () => {
  let [data, setData] = useState<components["schemas"]["GermanyDeathsDTO"]>();
  let [, setLatest] =
    useState<components["schemas"]["LatestGermanyCasesDTO"]>();
  let [shouldShowLatest, setShouldShowLatest] = useState<boolean>(false);
  let [range, setRange] = useState<number>(1);

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
      <Toolbar
        range={range}
        shouldShowLatest={shouldShowLatest}
        onSliderChange={(e) => {
          const value = parseInt(e.target.value);
          setRange(value);
        }}
        onCheckboxChange={() => setShouldShowLatest(!shouldShowLatest)}
      />
      {!shouldShowLatest ? (
        <div className={styles.gridContainer}>
          {data
            ? Object.entries(data).map(([stateName, stateData]) => {
                return (
                  <StateTile
                    key={stateName}
                    stateName={stateName}
                    data={{ variant: "deaths", stateData }}
                  />
                );
              })
            : null}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Deaths;
