import React from "react";
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects'
import About from './Components/About';

export default function App() {
  return (
<BrowserRouter>
    <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/projects" component={Projects}/>
     <Route exact path="/about" component={About}/>
    </Switch>
</BrowserRouter>
  );
}
