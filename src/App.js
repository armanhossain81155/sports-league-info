import Home from './Components/Home/Home';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SingleClubInfo from './Components/SingleClubINfo/SingleClubInfo';
import { createContext, useState } from 'react';


export const UserContext = createContext();





function App() {

  const [content, setContent] = useState([]);
  
  // console.log(content)
  
  return (
    
    <UserContext.Provider value={[content, setContent]}>
    <div className="main-one">
      
      <Router>
        <Switch>
          <Route exact path="/" >
          <Home ></Home>
          </Route>
          <Route path="/:idLeague">
            <SingleClubInfo ></SingleClubInfo>
          </Route>
         
        </Switch>
      </Router>
      
     

     
    </div>
    </UserContext.Provider>
   
  );
}

export default App;
