import { LayoutAdmin } from "../Layouts/LayoutAdmin"
import { LoginAndRegister } from "../pages/LoginAndRegister"

export const routes = [


    {
        path: "/admin",
        Component: LayoutAdmin,
        

    },
    {
        path: "/login-register",
        Component: LoginAndRegister,
        

    }
]