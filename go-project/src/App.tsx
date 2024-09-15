// import LandingPage from "./components/page/landing-page"

import { RouterProvider } from "react-router-dom"
import { rootRoutes } from "./routes"
import { SidebarProvider } from "./sidebarcontext"

function App() {

  return (
    <SidebarProvider>
    {/* <LandingPage></LandingPage> */}
    <RouterProvider router={rootRoutes}/>
    </SidebarProvider>
  )
}

export default App
