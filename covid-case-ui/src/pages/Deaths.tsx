import React, { useState } from "react";
import { createAxiosClient } from "../utils";
import { useQuery } from "react-query";
import { components } from "../generated/schema";
import { Outlet } from "react-router-dom";
import StateTile from "../components/layout/StateTile/StateTile";
import styles from "./Deaths.module.css";

const Deaths = () => {
  let [data, setData] = useState<components["schemas"]["GermanyDeathsDTO"]>();
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

  return (
    <>
      <Outlet />
      <div className={styles.gridContainer}>
        {data
          ? Object.entries(data).map(([stateName, stateData]) => {
              return (
                <StateTile
                  stateName={stateName}
                  data={{ variant: "deaths", stateData }}
                />
              );
            })
          : null}
      </div>
    </>
  );
};

export default Deaths;
