import Communities from "@/components/page/communities";
import LandingPage from "@/components/page/landing-page";
import Login from "@/components/page/login";
import { createBrowserRouter } from "react-router-dom";

export const rootRoutes = createBrowserRouter([
    {
        path: '/', element: <LandingPage/>
            
        
    },
    {
        path: '/login', element: <Login/>
    },
    {
        path: '/communities', element: <Communities/>
    }
])