import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import {themeConfig} from "./theme.tsx";
import { RouterProvider} from "react-router-dom";
import routers from "./providers/routes.tsx";
import Loading from "./components/Loading.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={themeConfig}>
      <RouterProvider router={routers} fallbackElement={<Loading  />} />
    </ChakraProvider>
  </React.StrictMode>,
)
