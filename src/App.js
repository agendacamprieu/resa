import "./App.scss";
import { EasybaseProvider } from "easybase-react";
import ebconfig from "./ebconfig";
import ListReservations from "./components/ListReservations";

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <EasybaseProvider ebconfig={ebconfig}>
        <ListReservations />
      </EasybaseProvider>
    </div>
  );
}

export default App;
