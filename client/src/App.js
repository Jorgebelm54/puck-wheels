import './App.css';
import React from "react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import {Route,Link} from "react-router-dom";
import NavBar from './NavBar';


//import of pages //
import Contact from './pages/Contact';
import Used from './pages/Used';
import New from './pages/New';
import About from './pages/About';
import Inventory from './pages/Inventory';


function App() {
  // const signedIn = true

  return  <div className="App">
    <NavBar/>
<Route exact path="/" component={Contact} />
<Route exact path="/" component={Home} />
<Route exact path="/Used" component={Used} />
<Route exact path="/New" component={New} />
<Route exact path="/About" component={About} />
<Route exact path="/Inventory" component={Inventory} />
 


          {/* {signedIn ? <Home /> : <Landing />} */}
         
        </div>
 


     
  
 
}

export default App;
