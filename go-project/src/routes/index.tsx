import Community from "@/components/page/communities/index";
import Communities from "@/components/page/communities";
import LandingPage from "@/components/page/landing-page";
import Login from "@/components/page/login";
import { createBrowserRouter } from "react-router-dom";
import Members from "@/components/page/members/index";
import Messages from "@/components/page/message/index";
import Archives from "@/components/page/archives/index";

export const rootRoutes = createBrowserRouter([
    {
        path: '/', element: <LandingPage/>
            
        
    },
    {
        path: '/login', element: <Login/>
    },
    {
        path: '/communities', element: <Communities/>,
         children: [
            {
                path: 'community', element: <Community/>
            },
            {
                path: 'members', element: <Members/>
            },
            {
                path: 'messages', element: <Messages/>
            },
            {
                path: 'archives', element: <Archives/>
            }
        ]
    }
])