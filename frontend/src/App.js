import './App.css';
import About from './components/About';
import {Switch, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/aboutus" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
