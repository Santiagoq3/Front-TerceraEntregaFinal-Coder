import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from './Routes/routes.config';

function App() {
  return (
    <BrowserRouter>
      <Routes>

       {
         routes.map(route=>{
           return <Route path={route.path} element={<route.Component/>} />
         })
       }
      </Routes>

    </BrowserRouter>
  );
}

export default App;
