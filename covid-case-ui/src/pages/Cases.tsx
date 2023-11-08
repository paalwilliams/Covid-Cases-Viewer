import { useState } from "react";
import { createAxiosClient } from "../utils";
import { useQuery } from "react-query";
import { components } from "../generated/schema";
import StateTile from "../components/layout/StateTile/StateTile";
import styles from "./Deaths.module.css";
import Toolbar from "../components/layout/Toolbar/Toolbar";

const Cases = () => {
  let [data, setData] = useState<components["schemas"]["GermanyCasesDTO"]>();
  let [, setLatest] =
    useState<components["schemas"]["LatestGermanyCasesDTO"]>();
  let [shouldShowLatest, setShouldShowLatest] = useState<boolean>(false);
  let [range, setRange] = useState<number>(1);

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
        <>
          <div className={styles.gridContainer}>
            {data
              ? Object.entries(data).map(([stateName, stateData]) => {
                  return (
                    <StateTile
                      key={stateName}
                      stateName={stateName}
                      data={{ variant: "cases", stateData: stateData }}
                    />
                  );
                })
              : ""}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Cases;
