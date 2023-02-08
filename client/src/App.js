import "./App.css";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import Detail from "./pages/Detail/Detail";
import NavBar from "./pages/NavBar/NavBar";
import { Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
