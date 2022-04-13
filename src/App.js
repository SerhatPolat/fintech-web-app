import "./styles/App.css";
import BasicTabs from "./components/tabs";
import Balance from "./components/balance";

function App() {
  return (
    <div className="App">
      <h1 className="balance">$12000</h1>
      <BasicTabs></BasicTabs>
    </div>
  );
}

export default App;
