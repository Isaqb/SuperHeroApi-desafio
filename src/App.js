import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import  "./App.css";
import AddGroup from './component/AddGrupo';
import ShowAll from "./ShowAll";

function App() {
  return(
    <Router>
      <Switch>
          <Route path="/" exact component={ShowAll} />
          <Route path="/groups" component={AddGroup} />
      </Switch>
    </Router>
    
  );
}

export default App;
