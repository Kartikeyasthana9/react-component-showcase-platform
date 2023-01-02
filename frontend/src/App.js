import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AddComponent from "./Components/AddComponent";

import ListComponent from "./Components/ListComponent";
import Login from './Components/Login';
import Register from './Components/Register';
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Test from "./Components/Test";
import ViewComponent from "./Components/ViewComponent";
import logo from './logo.svg';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route element={<Login />} path="/" />
          <Route element={<Register/>} path="register"/>
          <Route element={<Home/>} path="home"/>

          <Route element={<AddComponent />} path="addcomponent" />
          <Route element={<ListComponent/>} path="listcomponent" />
          <Route element={<ViewComponent />} path="viewer/:id" />
          <Route element={<Test />} path="test" />

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
