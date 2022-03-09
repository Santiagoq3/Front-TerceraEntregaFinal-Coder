import './App.css';
import {
  HashRouter,
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
        <HashRouter>
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
        </HashRouter>
      </CartContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
