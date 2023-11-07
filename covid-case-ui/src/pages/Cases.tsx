import React, { useState } from "react";
import { createAxiosClient } from "../utils";
import { useQuery } from "react-query";
import { components } from "../generated/schema";
import StateTile from "../components/layout/StateTile/StateTile";
import styles from "./Deaths.module.css";

const Cases = () => {
  let [data, setData] = useState<components["schemas"]["GermanyCasesDTO"]>();
  useQuery({
    queryKey: ["cases"],
    queryFn: async () => {
      const axios = createAxiosClient();
      const { data } = await axios.get<
        components["schemas"]["GermanyCasesDTO"]
      >("/api/cases/germany");
      setData(data);
    },
  });

  return (
    <div className={styles.gridContainer}>
      {data
        ? Object.entries(data).map(([stateName, stateData]) => {
            return (
              <StateTile
                stateName={stateName}
                data={{ variant: "cases", stateData: stateData }}
              />
            );
          })
        : null}
    </div>
  );
};

export default Cases;
