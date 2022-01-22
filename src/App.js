import "./styles/App.css";
import Product from "./components/Product";
import Easiest from "./components/Easiest";
import Help from "./components/Help";
import Works from "./components/Works";
import Choose from "./components/Choose";
import Want from "./components/Want";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";
import Bottom from "./components/Bottom";

function App() {
  return (
    <div className="App">
      <Product />
      <Easiest />
      <Help />
      <Works />
      <Choose />
      <Want />
      <Contact />
      <Thanks />
      <Bottom />
    </div>
  );
}

export default App;
