import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from './Routes/routes.config';
import { AuthContextProvider } from './Context/AuthContextProvider';

function App() {
  return (
    <AuthContextProvider >
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
    </AuthContextProvider>
    
  );
}

export default App;
