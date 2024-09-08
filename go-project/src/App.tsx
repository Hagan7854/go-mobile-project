// import LandingPage from "./components/page/landing-page"

import { RouterProvider } from "react-router-dom"
import { rootRoutes } from "./routes"

function App() {

  return (
    <>
    {/* <LandingPage></LandingPage> */}
    <RouterProvider router={rootRoutes}/>
    </>
  )
}

export default App
