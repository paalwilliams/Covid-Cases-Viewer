import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Cases from "./pages/Cases";
import Deaths from "./pages/Deaths";
import StateCases from "./pages/StateCases";
import StateDeaths from "./pages/StateDeaths";
import Layout from "./pages/Layout";
import { useState } from "react";

function App() {
  const client = new QueryClient();

  let [shouldShowLatest, setShouldShowLatest] = useState<boolean>(false);
  let [range, setRange] = useState<number>(1);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          range={range}
          setRange={setRange}
          setShouldShowLatest={setShouldShowLatest}
          shouldShowLatest={shouldShowLatest}
        />
      ),
      errorElement: <p>error</p>,
      children: [
        {
          path: "/deaths",
          element: <Deaths shouldShowLatest={shouldShowLatest} range={range} />,
          errorElement: <p>error</p>,
        },
        {
          path: "/cases",
          element: <Cases shouldShowLatest={shouldShowLatest} range={range} />,
          errorElement: <p>error</p>,
        },
        {
          path: "/cases/:state",
          element: (
            <StateCases shouldShowLatest={shouldShowLatest} range={range} />
          ),
          errorElement: <p>error</p>,
        },
        {
          path: "/deaths/:state",
          element: (
            <StateDeaths shouldShowLatest={shouldShowLatest} range={range} />
          ),
          errorElement: <p>error</p>,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
