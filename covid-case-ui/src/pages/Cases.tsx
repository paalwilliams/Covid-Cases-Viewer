import React, { useState } from "react";
import { createAxiosClient } from "../utils";
import { useQuery } from "react-query";
import { components } from "../generated/schema";

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
    <>
      {data
        ? Object.entries(data).map(([stateName, stateData]) => {
            return <p key={stateName}>{stateName}</p>;
          })
        : ""}
    </>
  );
};

export default Cases;
