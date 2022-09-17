import {BrowserRouter, Routes, Route, Link} from"react-router-dom"
import AddComponent from "./Components/AddComponent";
import Login from './Components/Login';
import NavBar from "./Components/NavBar";
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

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
