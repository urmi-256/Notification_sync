import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Qrcode from './pages/Qrcode/Qrcode';

const App=()=>{
  return(
       <Router>
         <div>
        <Switch>
          <Route path="/" exact component ={Qrcode}/>
          <Route path="/dash_board" exact component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;