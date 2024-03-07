import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout.tsx";
import NotFound from "../routes/NotFound.tsx";
import Home from "../routes/Home.tsx";
import {homeLoader} from "./loaders/homeLoader.ts";
const routers = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        loader: homeLoader,
        Component: Home,
      },
      {
        path: "*",
        Component: NotFound,
      }
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => routers.dispose());
}

export default routers;