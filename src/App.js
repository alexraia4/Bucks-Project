import "./styles/App.css";
import Product from "./components/Product";
import Easiest from "./components/Easiest";
import Help from "./components/Help";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <Product />
      <Easiest />
      <Help />
      <Works />
    </div>
  );
}

export default App;
