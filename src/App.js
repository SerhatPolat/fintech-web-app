import "./App.css";
import BasicTabs from "./components/tabs";
import Balance from "./components/balance/balance";

function App() {
  return (
    <div className="App">
      <div className="halfCircle"></div>
      <Balance></Balance>
      <BasicTabs></BasicTabs>
    </div>
  );
}

export default App;
