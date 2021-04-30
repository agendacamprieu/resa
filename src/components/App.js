import "../App.scss";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "../ebconfig";
import routes from "./allRoutes";
import { Container } from "react-materialize";
import { Route, Switch } from "react-router-dom";
import React from "react";
import M from "materialize-css";
import Menu from "./menu/Menu";
import "./momentLocaleFr";

function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Menu />
      <Container id="mainContainer" style={{ padding: "15px" }}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.component />}
            />
          ))}
        </Switch>
      </Container>
    </EasybaseProvider>
  );
}

export default App;
