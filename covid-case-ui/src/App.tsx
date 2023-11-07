import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Cases from "./pages/Cases";
import Deaths from "./pages/Deaths";

function App() {
  const client = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <p>error</p>,
      children: [
        {
          path: "/deaths",
          element: <Deaths />,

          children: [
            {
              path: "latest",
              element: <p>latest deaths</p>,
            },
          ],
        },
        {
          path: "/cases",
          element: <Cases />,
          errorElement: <p>error</p>,
          children: [
            {
              path: "latest",
              element: <p>latest cases</p>,
            },
          ],
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
