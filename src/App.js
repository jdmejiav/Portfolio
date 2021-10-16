import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomeComponent from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
