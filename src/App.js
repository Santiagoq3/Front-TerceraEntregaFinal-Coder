import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from './Routes/routes.config';
import { AuthContextProvider } from './Context/AuthContextProvider';
import { CartContextProvider } from './Context/CartContextProvider';

function App() {
  return (
    <AuthContextProvider >
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            {
              routes.map(route=>{
                return <Route path={route.path} element={<route.Component/>} >
                  
                      {
                        route.routes.map(ruta=>{
                          return <Route path={ruta.path} element={<ruta.Component />} />
                        })
                      }
                  
                  </Route>
              })
            }
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
