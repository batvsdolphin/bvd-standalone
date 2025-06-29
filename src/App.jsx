import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import FourOhFour from "./pages/FourOhFour";
import Phase01 from "./pages/Phase01";
import Phase02 from "./pages/Phase02";
import Phase03 from "./pages/Phase03";
import Phase04 from "./pages/Phase04";
import Phase05 from "./pages/Phase05";
import Phase06 from "./pages/Phase06";

const App = () => {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Phase05 />,
  },
  {
    path: "/phase-i",
    element: <Phase01 />,
  },
  {
    path: "/phase-ii",
    element: <Phase02 />,
  },
  {
    path: "/phase-iii",
    element: <Phase03 />,
  },
  {
    path: "/phase-iv",
    element: <Phase04 />
  },
  {
    path: "/phase-v",
    element: <Phase05 />
  },
  {
    path: "*",
    element: <FourOhFour />,
  },
]);


  return <RouterProvider router={router} />
};

export default App;