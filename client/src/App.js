import "./App.css";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import Detail from "./pages/Detail/Detail";
import { Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route path="/dog/:id" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
