import Topbar from "./components/topbar/Topbar.jsx";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>

        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>

        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>

        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>

        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
