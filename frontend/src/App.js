import {BrowserRouter, Routes, Route, Link} from"react-router-dom"
import AddComponent from "./Components/AddComponent";

import ListComponent from "./Components/ListComponent";
import Login from './Components/Login';
import NavBar from "./Components/NavBar";
import ViewComponent from "./Components/ViewComponent";
import logo from './logo.svg';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<AddComponent/>} path ="/" />
          <Route element={<Login/>} path ="login" />
         
          <Route element={<AddComponent/>} path ="addcomponent" />
          <Route element={<ListComponent></ListComponent>} path= "listcomponent"/>
          <Route element={<ViewComponent />} path= "viewer/:id"/>

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
