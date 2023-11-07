import React, { useState } from "react";
import { createAxiosClient } from "../utils";
import { useQuery } from "react-query";
import { components } from "../generated/schema";
import { Outlet } from "react-router-dom";

const Deaths = () => {
  let [data, setData] = useState<components["schemas"]["GermanyDeathsDTO"]>();
  useQuery({
    queryKey: ["cases"],
    queryFn: async () => {
      const axios = createAxiosClient();
      const { data } = await axios.get<
        components["schemas"]["GermanyDeathsDTO"]
      >("/api/cases/germany");
      setData(data);
    },
  });

  return (
    <>
      <Outlet />
      {data
        ? Object.entries(data).map(([stateName, stateData]) => {
            return <p key={stateName}>{stateName}</p>;
          })
        : ""}
    </>
  );
};

export default Deaths;
