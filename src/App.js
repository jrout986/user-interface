import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Home from './Home';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import CreateEmployee from './CreateEmployee';
import About from "./About";
import DeleteForm from './Component/DeleteForm';

function App() {
  return (
    <Router>
      <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/createEmp" component={CreateEmployee}></Route>
        <Route path="/deleteEmp" component={DeleteForm}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
