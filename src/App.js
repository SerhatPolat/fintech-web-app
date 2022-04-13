import "./styles/App.css";
import BasicTabs from "./components/tabs";
import Balance from "./components/balance";

function App() {
  return (
    <div className="App">
      <Balance></Balance>
      <BasicTabs></BasicTabs>
    </div>
  );
}

export default App;
