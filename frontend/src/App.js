import {BrowserRouter, Routes, Route, Link} from"react-router-dom"
import Login from './Components/Login';
import NavBar from "./Components/NavBar";
import logo from './logo.svg';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path ="login" />
          <Route element={<NavBar></NavBar>}path ="nav"/>
          

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
