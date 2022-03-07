import { LayoutAdmin } from "../Layouts/LayoutAdmin"
import { Cart } from "../pages/Cart"
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

    },
    {
        path:"/cart",
        Component: Cart,
        routes: [
            {
                
            }
        ]
    }
]