import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Router Setup/Home';
import About from './Router Setup/About';
import Services from './Router Setup/Services';
import Contact from './Router Setup/Contact';
import One from './Router Setup/Pages/One';
// import Pagenotfound from './Router Setup/Pagenotfound';
import RouterCon from './Router Setup/RouterCon';
import Three from './Router Setup/Pages/Three';
import Two from './Router Setup/Pages/Two';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <RouterCon />
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/One" component={One} />
        <Route path="/Two" component={Two} />
        <Route path="/Three" component={Three} />
        {/* <Route path="/*" component={Pagenotfound}/> */}
    </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
