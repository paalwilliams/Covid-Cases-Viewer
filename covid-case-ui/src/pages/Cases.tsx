import { useState } from "react";
import { createAxiosClient } from "../utils";
import { useQuery } from "react-query";
import { components } from "../generated/schema";
import StateTile from "../components/layout/StateTile/StateTile";
import styles from "./Deaths.module.css";

const Cases = ({
  shouldShowLatest,
  range,
}: {
  shouldShowLatest: boolean;
  range: number;
}) => {
  let [data, setData] = useState<components["schemas"]["GermanyCasesDTO"]>();
  let [latest, setLatest] =
    useState<components["schemas"]["LatestGermanyCasesDTO"]>();

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

  useQuery({
    queryKey: [range],
    queryFn: async () => {
      const axios = createAxiosClient();
      const { data } = await axios.get<
        components["schemas"]["LatestGermanyCasesDTO"]
      >(`/api/cases/germany/latest/${range}`);
      setLatest(data);
    },
  });

  return (
    <>
      <div className={styles.gridContainer}>
        {!shouldShowLatest && data
          ? Object.entries(data).map(([stateName, stateData]) => {
              return (
                <StateTile
                  path="cases"
                  key={stateName}
                  stateName={stateName}
                  data={{ variant: "cases", stateData: stateData }}
                />
              );
            })
          : latest
          ? Object.entries(latest).map(([stateName, stateData]) => {
              return (
                <StateTile
                  path="cases"
                  key={stateName}
                  stateName={stateName}
                  data={{
                    variant: "state-cases-latest",
                    stateData: stateData,
                  }}
                />
              );
            })
          : ""}
      </div>
    </>
  );
};

export default Cases;
