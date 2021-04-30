import "./App.scss";
import "react-materialize";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Main;
