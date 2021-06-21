import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';
import Api from './components/Api';
import ApiItem from "./components/ApiItem";

function App() {
  return (

    // {/* <ToDo /> */ }
    // {/* <Api /> */ }
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/api">API</Link>
            </li>
            <li>
              <Link to="/to-do">ToDoListe</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/api" component={Api} exact />
          <Route path="/api/:finn" component={ApiItem} />
          <Route path="/to-do" component={ToDo} />

          <Route path="/" exact>
            <div>Home</div>
          </Route>
          <Route>
            <div>ERROR</div>
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
