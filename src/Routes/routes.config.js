import { LayoutAdmin } from "../Layouts/LayoutAdmin"
import { LoginAndRegister } from "../pages/LoginAndRegister"
import { Products } from "../pages/Products"

export const routes = [


    {
        path: "/admin",
        Component: LayoutAdmin,
        routes: [
            {

                path: "products",
                Component: Products

            }

        ]
        

    },
    {
        path: "/login-register",
        Component: LoginAndRegister,
        routes: [
            {
               
            }
        ]

    }
]