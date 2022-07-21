import logo from './logo.svg';
import './App.css';
import Nav from "./Nav"
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Service from "./Service"
import Product from "./Product"
import {useNavigate} from "react-router-dom"
import Subscribe from "./Subscribe"

function App() {
  let navigate = useNavigate()
  return (
    <div className="App">
      <Nav/>
      <h1>abcd Enterprises</h1>
      <Routes>
        <Route path='home' element = {<Home/>}/>
        <Route path='service' element = {<Service/>}/>
        <Route path='product' element = {<Product/>}/>
        <Route path='subscribe' element = {<Subscribe/>}/>
      </Routes>
      <button onClick={()=>navigate("subscribe")}>Subscribe</button>
    </div>
  );
}

export default App;
