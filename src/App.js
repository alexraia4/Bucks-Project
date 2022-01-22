import "./styles/App.css";
import Product from "./components/Product";
import Easiest from "./components/Easiest";
import Help from "./components/Help";
import Works from "./components/Works";
import Choose from "./components/Choose";

function App() {
  return (
    <div className="App">
      <Product />
      <Easiest />
      <Help />
      <Works />
      <Choose />
    </div>
  );
}

export default App;
