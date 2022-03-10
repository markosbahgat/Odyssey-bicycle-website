import React, { Component } from 'react';
import FirstPage from './components/FirstPage.jsx';
import About from './components/About.jsx';
import {
  Route,
  BrowserRouter
} from "react-router-dom";

class App extends Component {

  

  render() { 
    return <BrowserRouter>
      <Route  path="/about">
        <About/>
      </Route>
    <div style={{position:"absolute", width:"100%",height:"100vh" , overflow:"hidden"}}>
      <Route exact path="/">
           <FirstPage />
      </Route>
          </div>
      </BrowserRouter>;
      }
}
 
export default App;
