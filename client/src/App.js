import "./App.css";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import Detail from "./pages/Detail/Detail";
import SearchBar from "./pages/SearchBar/SearchBar";
import { Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={SearchBar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/form" component={Form} />
    </div>
  );
}

export default App;
